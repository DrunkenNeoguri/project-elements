import {
  applyActionCode,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  updateProfile,
  verifyPasswordResetCode,
} from "firebase/auth";
import { firebaseAuth, firestore } from "../utils/util-firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { convertUnknownTypeErrorToStringMessage } from "../utils/util-convert";
import { AccountFormType } from "../types/user.types";

// 문제 없이 200일 시, return "OK";
class AuthService {
  static async postLoginProcess(
    formData: Pick<AccountFormType, "email" | "password">
  ) {
    try {
      const auth = firebaseAuth;
      auth.languageCode = "ko";
      // const persistenceSetting =
      //   convertPersistenceByAutoSignInState(autoSignInState);
      // await setPersistence(auth, persistenceSetting);
      const loginResult = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      if (loginResult !== undefined) {
        if (!loginResult.user.emailVerified) {
          return new Error(
            "본 계정은 아직 본인 인증이 완료되지 않았습니다.\n아래 버튼을 눌러 본인 인증을 진행해주세요."
          );
        }

        const userInfo = await getDoc(
          doc(firestore, `users`, loginResult.user.uid)
        );
        localStorage.setItem("userInfo", String(userInfo.data()));
      }
      return "OK";
    } catch (error) {
      console.log(error);
      return new Error(convertUnknownTypeErrorToStringMessage(error));
      // const errorMessage = convertUnknownTypeErrorToStringMessage(error);
      // return setModalState({
      //   isOpen: true,
      //   message: errorMessage,
      //   buttonText: "알겠습니다.",
      //   closeFunc: () => clearModalState(),
      // });
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
      // const actionCode = searchParams.get("actionCode");
      // if (actionCode === null) {
      //   return setOpenState({
      //     state: true,
      //     message: `유효하지 않은 접근입니다.\n비밀번호 찾기 페이지로 돌아가\n절차를 다시 진행해주세요.`,
      //   });
      // }
      await verifyPasswordResetCode(auth, actionCode);
      await confirmPasswordReset(auth, actionCode, formData.password);
      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async updateAccountVerificationState(actionCode: string) {
    if (actionCode === null) {
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

        return await setDoc(doc(firestore, `users`, user.uid), {
          email: user.email,
          username: user.displayName,
          createdAt: new Date().getTime(),
          recentTravel: "",
        });
      });

      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }
}

export default AuthService;
