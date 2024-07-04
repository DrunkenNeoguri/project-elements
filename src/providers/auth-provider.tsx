"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../utils/util-firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

type AuthContextType = User | null;

export const AuthContext = createContext<AuthContextType>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextType>(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        return setUser(user);
      } else {
        setUser(null);
        router.push("/user/login");
        return new Error("Authorization token is expired.");
      }
    });
  }, [router]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
