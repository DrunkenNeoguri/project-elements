import {
  applyActionCode,
  browserLocalPersistence,
  browserSessionPersistence,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
  verifyPasswordResetCode,
} from "firebase/auth";
import {
  firebaseAuth,
  firestore,
  googleProvider,
} from "../utils/util-firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  runTransaction,
  setDoc,
} from "firebase/firestore";
import { convertUnknownTypeErrorToStringMessage } from "../utils/util-convert";
import { AccountFormType, UserInfoType } from "../types/user.types";
import TravelService from "./travel-services";

// *MEMO: 문제 없이 200일 시, 예외를 제외하고 return "OK";
class AuthService {
  static async updateAccountPersistenceState(rememberState: boolean) {
    try {
      const auth = firebaseAuth;
      await setPersistence(
        auth,
        rememberState ? browserLocalPersistence : browserSessionPersistence
      );
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async postLoginProcess(
    formData: Pick<AccountFormType, "email" | "password">
  ) {
    try {
      const auth = firebaseAuth;
      auth.languageCode = "ko";

      const loginResult = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      if (loginResult !== undefined) {
        if (!loginResult.user.emailVerified) {
          await sendEmailVerification(loginResult.user);
          return new Error(
            `아직 본인 인증이 완료되지 않아 확인을 위해 가입하신 이메일 주소로 본인 인증 메일을 보내드렸습니다.\n\n메일함에서 내용을 확인하셔서 본인 인증을 완료해주시기 바랍니다.`
          );
        }

        const userDataResponse = await getDoc(
          doc(await firestore(), "users", loginResult.user.uid)
        );

        const userData = userDataResponse.data();
        const upcomingTravel =
          await TravelService.renewalUpcomingTravelInUserData(
            loginResult.user.uid
          );

        if (upcomingTravel != null) {
          const renewalUserData = {
            ...userData,
            upcomingTravel: {
              title: upcomingTravel.title,
              id: upcomingTravel.id,
              departureAt: upcomingTravel.departureAt,
            },
          };

          await setDoc(
            doc(await firestore(), `users`, loginResult.user.uid),
            renewalUserData
          );

          localStorage.setItem("userInfo", JSON.stringify(renewalUserData));
        } else {
          localStorage.setItem("userInfo", JSON.stringify(userData));
        }
      }
      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async postGoogleLoginProcess() {
    try {
      const googleLoginState = await signInWithPopup(
        firebaseAuth,
        googleProvider
      );

      if (googleLoginState != null) {
        const userInfoDocs = await getDoc(
          doc(await firestore(), `users`, googleLoginState.user.uid)
        );
        const userInfo = JSON.stringify(userInfoDocs.data());

        if (userInfo == null) {
          const currentUserData = {
            email: googleLoginState.user.email,
            username: googleLoginState.user.displayName,
            createdAt: new Date().getTime(),
          };

          await setDoc(
            doc(await firestore(), `users`, googleLoginState.user.uid),
            currentUserData
          );

          localStorage.setItem("userInfo", JSON.stringify(currentUserData));
        } else {
          localStorage.setItem("userInfo", JSON.stringify(userInfoDocs.data()));
        }
      }

      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async postSignUpProcess(formData: AccountFormType) {
    try {
      const auth = firebaseAuth;
      auth.languageCode = "ko";
      const createAccountResult = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const userData = await createAccountResult.user;
      if (userData === null) {
        return new Error(
          "계정 생성이 진행되지 않았습니다.\n잠시 후, 다시 시도해주세요."
        );
      }

      const profileUpdateResult = await updateProfile(userData, {
        displayName: formData.username,
      });

      if (profileUpdateResult !== undefined) {
        return new Error(
          "문제로 인해 닉네임이 저장되지 않았습니다.\n로그인 후, 닉네임을 변경해주세요."
        );
      }

      await sendEmailVerification(userData);
      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async postForgetPasswordProcess(
    formData: Pick<AccountFormType, "email">
  ) {
    try {
      const auth = firebaseAuth;
      auth.languageCode = "ko";
      await sendPasswordResetEmail(auth, formData.email);
      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async postResetPasswordProcess(
    actionCode: string,
    formData: Pick<AccountFormType, "password" | "confirmPassword">
  ) {
    try {
      const auth = firebaseAuth;

      if (actionCode === null) {
        return new Error(
          `유효하지 않은 접근입니다.\n비밀번호 찾기 페이지로 돌아가 절차를 다시 진행해주세요.`
        );
      }
      await verifyPasswordResetCode(auth, actionCode);
      await confirmPasswordReset(auth, actionCode, formData.password);
      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async updatePasswordProcess(newPassword: string) {
    try {
      const auth = firebaseAuth;
      const currentUser = auth.currentUser;

      if (currentUser) {
        await updatePassword(currentUser, newPassword);
        return "OK";
      } else {
        throw new Error("비밀번호를 변경할 수 없습니다.");
      }
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async updateProfileProcess(username: string) {
    try {
      const auth = firebaseAuth;
      const currentUser = auth.currentUser;
      const userData = JSON.parse(
        localStorage.getItem("userInfo") as string
      ) as UserInfoType;

      if (currentUser) {
        await updateProfile(currentUser, {
          displayName: username,
        });

        const newUserProfile = {
          ...userData,
          username,
        };

        await setDoc(
          doc(await firestore(), `users`, currentUser.uid),
          newUserProfile
        );

        localStorage.setItem("userInfo", JSON.stringify(newUserProfile));

        return "OK";
      } else {
        throw new Error("프로필을 수정할 수 없습니다.");
      }
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async updateAccountVerification(
    actionCode: string | null | undefined
  ) {
    if (actionCode === null || !actionCode) {
      return new Error(
        "본인 인증에 실패했습니다.\n로그인 페이지로 돌아가 로그인 후,\n본인 인증을 다시 진행해주세요."
      );
    }

    try {
      const auth = firebaseAuth;
      await applyActionCode(auth, actionCode);

      await onAuthStateChanged(auth, async (user) => {
        if (user === null) {
          return new Error(
            "존재하지 않는 계정입니다.\n로그인 화면에서 회원가입을 눌러 절차를 진행해주세요."
          );
        }

        return await setDoc(doc(await firestore(), `users`, user.uid), {
          email: user.email,
          username: user.displayName,
          createdAt: new Date().getTime(),
        });
      });

      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async postLogOutProcess() {
    try {
      await signOut(firebaseAuth);
      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async postUserCheckProcessByLoginUser(
    formData: Pick<AccountFormType, "password">
  ) {
    try {
      const auth = firebaseAuth;
      auth.languageCode = "ko";

      await signInWithEmailAndPassword(
        auth,
        auth.currentUser?.email as string,
        formData.password
      );

      return "OK";
    } catch (error) {
      return new Error(
        "입력하신 계정의 비밀번호와 다릅니다. 다시 한 번 확인해주세요."
      );
    }
  }

  static async postSignOutProcess(opinion?: string) {
    try {
      const auth = firebaseAuth;
      const currentUser = auth.currentUser;
      const currentUserUid = auth.currentUser?.uid as string;

      if (currentUser) {
        await runTransaction(await firestore(), async (transaction) => {
          await deleteUser(currentUser);
          await localStorage.removeItem("userInfo");

          const database = await firestore();

          (
            await getDocs(
              collection(database, "travels", currentUserUid, "docs")
            )
          ).forEach(async (data) => {
            await transaction.delete(
              doc(
                collection(
                  await firestore(),
                  "travels",
                  currentUserUid,
                  "docs"
                ),
                data.id
              )
            );
          });

          (
            await getDocs(
              collection(database, "elements", currentUserUid, "docs")
            )
          ).forEach(async (data) => {
            await transaction.delete(
              doc(
                collection(
                  await firestore(),
                  "elements",
                  currentUserUid,
                  "docs"
                ),
                data.id
              )
            );
          });

          await transaction.delete(
            doc(await firestore(), "users", currentUserUid)
          );
        });
      }

      if (opinion) {
        await setDoc(doc(await firestore(), `opinions`, currentUserUid), {
          opinion,
        });
      }

      return "OK";
    } catch (error) {
      console.log(error);
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }
}

export default AuthService;
