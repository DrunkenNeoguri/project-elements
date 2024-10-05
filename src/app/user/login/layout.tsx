import { ReactNode } from "react";
import Header from "../../../components/header/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header title="로그인" />
      <section className="flex flex-col w-full justify-center items-center pt-[72px] h-[100dvh] pb-6">
        {children}
      </section>
    </>
  );
}
