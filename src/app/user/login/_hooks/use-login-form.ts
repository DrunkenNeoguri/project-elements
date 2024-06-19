import { useState } from "react";

// @MEMO - 네이버에서는 로그인 정보 기록이 아닌 로그인 정보 유지를 하고 있음.
// @MEMO - 로그인 화면에서 토큰 있으면 바로 메인으로 넘어가기
// @MEMO - 로그인 후 메인 갔다 뒤로 돌아가면 풀려있는 걸로.
// @MEMO - 최상단 page는 '/main' 컴포넌트와 완전히 동일하게 구성할 것.

export default function useLoginForm() {
  const [loginData, setLoginData] = useState<Record<string, string>>({});
  const [rememberLogin, setRememberLogin] = useState<boolean>(false);

  return { loginData, setLoginData, rememberLogin, setRememberLogin };
}

// const toggleAutoSignInState = () => {
//   localStorage.setItem("autoSignIn", String(!autoSignInState));
//   return setAutoSignInState(!autoSignInState);
// };

// const postSignInProcess = async (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   if (isInvalidatedSignInFormInput(formInput)) {
//     return setErrorMsgState({ email: true, password: true });
//   }

//   try {
//     const auth = firebaseAuth;
//     auth.languageCode = "ko";
//     const persistenceSetting =
//       convertPersistenceByAutoSignInState(autoSignInState);
//     await setPersistence(auth, persistenceSetting);
//     const signInResult = await signInWithEmailAndPassword(
//       auth,
//       formInput.email,
//       formInput.password
//     );

//     if (signInResult !== undefined) {
//       if (!signInResult.user.emailVerified) {
//         return setModalState({
//           isOpen: true,
//           message: `본 계정은 아직 본인 인증이 완료되지 않았습니다.\n아래 버튼을 눌러 본인 인증을 진행해주세요.`,
//           buttonText: "본인 인증 이메일 보내기",
//           closeFunc: async () => {
//             clearModalState();
//             await sendEmailVerification(signInResult.user);
//             return navigate(
//               `/users/signup?step=complete&email=${signInResult.user.email}`
//             );
//           },
//         });
//       }

//       const userInfo = await getDoc(
//         doc(firestore, `users`, signInResult.user.uid)
//       );
//       localStorage.setItem("userInfo", String(userInfo.data()));
//       return navigate("/main");
//     }
//   } catch (error) {
//     const errorMessage = convertUnknownTypeErrorToStringMessage(error);
//     return setModalState({
//       isOpen: true,
//       message: errorMessage,
//       buttonText: "알겠습니다.",
//       closeFunc: () => clearModalState(),
//     });
//   }
// };
