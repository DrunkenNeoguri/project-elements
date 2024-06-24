"use client";
import { ReactNode, Suspense } from "react";
import Header from "../../components/header/header";
import { Bar } from "../../components/loader/loader";
import MainHeader from "./_components/main-header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[100vh] flex justify-center items-center relative bg-[#37373780]">
          <Bar />
        </div>
      }
    >
      <Header useSideBar={false} />
      <MainHeader />

      <section className="flex flex-col w-full justify-center items-center">
        {children}
      </section>
    </Suspense>
  );
}
