"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../utils/util-firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";

type AuthContextType = User | null;

export const AuthContext = createContext<AuthContextType>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextType>(null);
  const router = useRouter();
  const pathname = usePathname();

  // ?CONCERN: 예외 경로만 별도로 처리할 수 있는 방안을 좀 더 깔끔하게 할 수 있는 방법이 있을지...
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        return setUser(user);
      } else {
        setUser(null);

        // const exceptionPaths = [
        //   "/",
        //   "/main",
        //   "/travel/create",
        //   "/template",
        //   "/element/create",
        // ];

        // if (exceptionPaths.includes(pathname)) {
        router.push("/user/login");
        // }
        return new Error("Authorization token is expired.");
      }
    });
  }, [router, pathname]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
