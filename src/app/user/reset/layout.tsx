import { ReactNode } from "react";
import Header from "../../../components/header/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header activePrev={false} useSideBar={false} title="비밀번호 변경" />
      <section className="flex flex-col w-full justify-center items-center mt-[72px]">
        {children}
      </section>
    </>
  );
}
