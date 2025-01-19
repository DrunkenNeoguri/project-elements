import { ReactNode } from "react";
import Header from "../../../../../../components/header/header";
import AuthProvider from "../../../../../../providers/auth-provider";
import ExternalProvider from "../../../../../../providers/external-provider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Header activePrev title="본인 확인" />
      <section className="flex flex-col w-full justify-center items-center mt-24">
        <ExternalProvider>{children}</ExternalProvider>
      </section>
    </AuthProvider>
  );
}
