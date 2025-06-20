"use client";
import { ReactNode } from "react";
import Header from "../../components/header/header.tsx";
import AuthProvider from "../../providers/auth-provider.tsx";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Header activeSearch useSideBar />
      <section className="flex flex-col w-full justify-center items-center px-4 mt-20">
        {children}
      </section>
    </AuthProvider>
  );
}
