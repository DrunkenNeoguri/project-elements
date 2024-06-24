"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Redirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const enteredMode = searchParams?.get("mode");
  const actionCode = searchParams?.get("oobCode");

  useEffect(() => {
    if (enteredMode === "verifyEmail") {
      setTimeout(() => {
        return router.push(`/user/verified?actionCode=${actionCode}`);
      }, 100);
    }
    if (enteredMode === "resetPassword") {
      setTimeout(() => {
        return router.push(`/user/reset?actionCode=${actionCode}`);
      }, 100);
    }
  }, [actionCode, enteredMode, searchParams, router]);

  return <></>;
}
