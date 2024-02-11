import { useCallback, useEffect, useLayoutEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { firebaseAuth } from "../../../common/utils/util-firebase";
import { applyActionCode } from "firebase/auth";

export function useSignUpComplete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const auth = firebaseAuth;

  const moveToSignInPage = () => {
    navigate("/signin");
  };

  useLayoutEffect(() => {
    const applyActionCodeAndVerifiedAccount = async () => {
      const actionCode = await searchParams.get("oobCode");
      if (actionCode === null) {
        throw new Error("The Action Code is invalid.");
      }
      await applyActionCode(auth, actionCode);
    };
    applyActionCodeAndVerifiedAccount();
  }, [auth, searchParams]);

  return { moveToSignInPage };
}
