import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AuthService from "../../../services/auth-services";

export default function useRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const enteredMode = searchParams?.get("mode");
  const actionCode = searchParams?.get("oobCode");
  const [modalMsg, setModalMsg] = useState<string | undefined>();

  useEffect(() => {
    if (enteredMode === "verifyEmail") {
      const activeValidation = async () => {
        const validityState = await AuthService.updateAccountVerification(
          actionCode
        );
        if (validityState === "OK") {
          return router.push(`/user/verified?actionCode=${actionCode}`);
        } else {
          setModalMsg(validityState.message);
        }
      };
      activeValidation();
    }
    if (enteredMode === "resetPassword") {
      return router.push(`/user/reset?actionCode=${actionCode}`);
    }
  }, [actionCode, enteredMode, searchParams, router]);

  return { modalMsg, setModalMsg, router };
}
