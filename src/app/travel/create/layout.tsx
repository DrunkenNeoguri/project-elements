import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col w-full h-[100vh] py-0 px-4 box-border bg-primaryDeep">
      {children}
    </section>
  );
}
