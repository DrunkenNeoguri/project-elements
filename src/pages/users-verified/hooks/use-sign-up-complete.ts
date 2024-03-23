import { useLayoutEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { applyActionCode, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, firestore } from "../../../utils/util-firebase";
import { doc, setDoc } from "firebase/firestore";

export function useSignUpComplete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const moveToSignInPage = () => {
    return navigate("/main");
  };

  useLayoutEffect(() => {
    const updateAccountVerificationState = async () => {
      const auth = firebaseAuth;
      const actionCode = await searchParams.get("actionCode");
      if (actionCode === null) {
        throw new Error("The Action Code is invalid.");
      }

      await applyActionCode(auth, actionCode);
      const createUserDataState = await onAuthStateChanged(
        auth,
        async (user) => {
          if (user === null) {
            throw new Error("계정 정보가 없습니다.");
          }

          await setDoc(doc(firestore, `users`, user.uid), {
            email: user.email,
            username: user.displayName,
            createdAt: new Date().getTime(),
            recentTravel: "",
          });
        }
      );

      createUserDataState();
    };

    updateAccountVerificationState();
    return;
  }, [searchParams]);

  return { moveToSignInPage };
}
