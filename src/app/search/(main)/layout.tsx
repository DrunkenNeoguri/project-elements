import { ReactNode } from "react";
import Header from "../../../components/header/header";
import AuthProvider from "../../../providers/auth-provider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Header activePrev activeSearch />
      <section className="flex flex-col w-full justify-center items-center mt-[72px]">
        {children}
      </section>
    </AuthProvider>
  );
}
