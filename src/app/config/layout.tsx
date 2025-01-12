"use client";
import { ReactNode } from "react";
import Header from "../../components/header/header.tsx";
import AuthProvider from "../../providers/auth-provider.tsx";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Header activePrev useSideBar title="설정" />
      <section className="flex flex-col w-full justify-center items-center mt-20">
        {children}
      </section>
    </AuthProvider>
  );
}
