import { ReactNode } from "react";
import Header from "../../../components/header/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header title="본인 인증 완료" />
      <section className="flex flex-col w-full justify-center items-center mt-[72px]">
        {children}
      </section>
    </>
  );
}
