"use client";
import { ReactNode, Suspense, useContext } from "react";
import Header from "../../components/header/header";
import { AuthContext } from "../../providers/auth-provider.tsx";
import MainHeader from "./_components/main-header.tsx";
import { Bar } from "../../components/loader/loader.tsx";

export default function Layout({ children }: { children: ReactNode }) {
  const user = useContext(AuthContext);

  return (
    <>
      {!user && (
        <div className="w-full max-w-[379px] h-[100vh] flex justify-center items-center absolute z-[45] top-0 bg-white">
          <Bar />
        </div>
      )}
      <Header activeSearch={true} useSideBar={true} />
      <Suspense>
        <MainHeader username={user?.displayName} />
      </Suspense>
      <section className="flex flex-col w-full justify-center items-center">
        {children}
      </section>
    </>
  );
}
``;
