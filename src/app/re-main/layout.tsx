"use client";
import { ReactNode, useContext } from "react";
import Header from "../../components/header/header";
import { AuthContext } from "../../providers/auth-provider.tsx";
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
      <section className="flex flex-col w-full justify-center items-center px-4">
        {children}
      </section>
    </>
  );
}
