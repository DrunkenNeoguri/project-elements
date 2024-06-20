import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col w-full justify-center items-center">
      {children}
    </section>
  );
}
