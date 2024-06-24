"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Bar } from "../../components/loader/loader";
import AuthService from "../../services/auth-services";

export default function Redirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const enteredMode = searchParams?.get("mode");
  const actionCode = searchParams?.get("oobCode");

  useEffect(() => {
    if (enteredMode === "verifyEmail") {
      const activeValidation = async () => {
        const validityState = await AuthService.updateAccountVerification(
          actionCode
        );
        if (validityState === "OK") {
          setTimeout(() => {
            return router.push(`/user/verified?actionCode=${actionCode}`);
          }, 100);
        }
      };
      activeValidation();
    }
    if (enteredMode === "resetPassword") {
      setTimeout(() => {
        return router.push(`/user/reset?actionCode=${actionCode}`);
      }, 100);
    }
  }, [actionCode, enteredMode, searchParams, router]);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center relative bg-[#37373780]">
      <Bar />
    </div>
  );
}
