import { ReactNode } from "react";
import Header from "../../../components/header/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header activePrev={false} useSideBar={false} title="로그인" />
      <section className="flex flex-col w-full justify-center items-center mt-[72px]">
        {children}
      </section>
    </>
  );
}
