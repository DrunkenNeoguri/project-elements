'use client';
import { ReactNode } from 'react';
import AuthProvider from '../../../providers/auth-provider';
import Header from '../../../components/header/header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Header activePrev useSideBar title="설정" />
      <section className="flex flex-col w-full justify-center items-center mt-20">
        {children}
      </section>
    </AuthProvider>
  );
}
