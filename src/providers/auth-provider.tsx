"use client";
import { useAtom } from "jotai";
import { userInfoAtom } from "../atoms/userInfo";
import { ReactNode, useEffect } from "react";
import { firebaseAuth } from "../utils/util-firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [, setUserInfo] = useAtom(userInfoAtom);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        return setUserInfo(user);
      } else {
        setUserInfo(null);
        router.push("/user/login");
        return new Error("Authorization token is expired.");
      }
    });
  }, [router, setUserInfo]);

  return <>{children}</>;
}
