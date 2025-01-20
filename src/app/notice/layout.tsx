"use client";
import { ReactNode } from "react";
import AuthProvider from "../../providers/auth-provider";
import Header from "../../components/header/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Header activePrev title="공지사항" />
      <section className="flex flex-col w-full justify-center items-center mt-[92px] px-4">
        {children}
      </section>
    </AuthProvider>
  );
}
