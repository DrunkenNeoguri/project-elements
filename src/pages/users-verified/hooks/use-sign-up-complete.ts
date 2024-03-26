import { useLayoutEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { applyActionCode, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, firestore } from "../../../utils/util-firebase";
import { doc, setDoc } from "firebase/firestore";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";

export function useSignUpComplete() {
  const [openState, setOpenState] = useState({ state: false, message: "" });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const moveToMainPage = () => {
    return navigate("/main");
  };

  const moveToSignInPage = () => {
    setOpenState({ state: false, message: "" });
    return navigate("/users/signin");
  };

  useLayoutEffect(() => {
    const updateAccountVerificationState = async () => {
      const actionCode = await searchParams.get("actionCode");

      if (actionCode === null) {
        return setOpenState({
          state: true,
          message: `본인 인증에 실패했습니다.\n로그인 페이지로 돌아가 로그인 후,\n본인 인증을 다시 진행해주세요.`,
        });
      }

      try {
        const auth = firebaseAuth;
        await applyActionCode(auth, actionCode);

        const createUserDataState = await onAuthStateChanged(
          auth,
          async (user) => {
            if (user === null) {
              return setOpenState({
                state: true,
                message: `존재하지 않는 계정입니다.\n로그인 화면에서 회원가입을 눌러 절차를 진행해주세요.`,
              });
            }

            return await setDoc(doc(firestore, `users`, user.uid), {
              email: user.email,
              username: user.displayName,
              createdAt: new Date().getTime(),
              recentTravel: "",
            });
          }
        );

        return createUserDataState();
      } catch (error) {
        const errorMessage = convertUnknownTypeErrorToStringMessage(error);
        return setOpenState({ state: true, message: errorMessage });
      }
    };

    updateAccountVerificationState();
  }, [searchParams]);

  return { openState, moveToMainPage, moveToSignInPage };
}
