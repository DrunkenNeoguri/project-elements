import { ReactNode } from 'react';
import Header from '../../../../../../components/header/header';
import AuthProvider from '../../../../../../providers/auth-provider';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Header activePrev title="비밀번호 변경" />
      <section className="flex flex-col w-full justify-center items-center mt-24">
        {children}
      </section>
    </AuthProvider>
  );
}
