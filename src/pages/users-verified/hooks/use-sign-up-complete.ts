import { useLayoutEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { applyActionCode } from "firebase/auth";
import { firebaseAuth } from "../../../utils/util-firebase";

export function useSignUpComplete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const moveToSignInPage = () => {
    return navigate("/users/signin");
  };

  useLayoutEffect(() => {
    const applyActionCodeAndVerifiedAccount = async () => {
      const auth = firebaseAuth;
      const actionCode = await searchParams.get("actionCode");
      if (actionCode === null) {
        throw new Error("The Action Code is invalid.");
      }
      await applyActionCode(auth, actionCode);
    };
    applyActionCodeAndVerifiedAccount();
    return;
  }, [searchParams]);

  return { moveToSignInPage };
}
