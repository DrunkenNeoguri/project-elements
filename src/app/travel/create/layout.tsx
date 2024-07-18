import { ReactNode } from "react";
import AuthProvider from "../../../providers/auth-provider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <section className="flex flex-col w-full h-[100vh] py-0 px-4 box-border bg-primaryDeep">
        {children}
      </section>
    </AuthProvider>
  );
}
