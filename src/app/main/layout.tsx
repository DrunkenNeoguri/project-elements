"use client";
import { ReactNode, Suspense, useContext } from "react";
import Header from "../../components/header/header";
import { AuthContext } from "../../providers/auth-provider.tsx";
import MainHeader from "./_components/main-header.tsx";
import { Bar } from "../../components/loader/loader.tsx";
import Backdrop from "../../components/backdrop/backdrop.tsx";

export default function Layout({ children }: { children: ReactNode }) {
  const user = useContext(AuthContext);

  return (
    <>
      {!user && (
        <Backdrop colorTheme="loader">
          <Bar />
        </Backdrop>
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
