"use client";
import { ReactNode, useContext } from "react";
import Header from "../../components/header/header";
import { Bar } from "../../components/loader/loader";
import { AuthContext } from "../../providers/auth-provider.tsx";
import MainHeader from "./_components/main-header.tsx";

export default function Layout({ children }: { children: ReactNode }) {
  const user = useContext(AuthContext);

  if (!user) {
    return (
      <section className="w-full h-[100vh] flex justify-center items-center bg-[#37373780]">
        <Bar />
      </section>
    );
  }

  return (
    <>
      <Header activeSearch={true} useSideBar={true} />
      <MainHeader user={user} />

      <section className="flex flex-col w-full justify-center items-center">
        {children}
      </section>
    </>
  );
}
``;
