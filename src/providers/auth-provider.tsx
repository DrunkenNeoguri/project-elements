'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Backdrop from '../components/backdrop/backdrop';
import { Bar } from '../components/loader/loader';
import { supabaseAuth } from '../utils/util-supabase';
import { User } from '@supabase/supabase-js';

export type AuthContextType = User | null;

export const AuthContext = createContext<AuthContextType>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextType>(null);
  const router = useRouter();
  const pathname = usePathname();

  // ?CONCERN: 예외 경로만 별도로 처리할 수 있는 방안을 좀 더 깔끔하게 할 수 있는 방법이 있을지...
  useEffect(() => {
    //* MEMO: 새로고침 등이 발생 시, 유저 정보가 있는지를 확인
    const {
      data: { subscription },
    } = supabaseAuth.onAuthStateChange((event, session) => {
      if (session && (event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN')) {
        setUser(session.user);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        router.push('/user/login');
      }
    });

    //* MEMO: 앱 시작 시, 유저 정보가 있는지를 확인
    supabaseAuth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, pathname]);

  return (
    <AuthContext.Provider value={user}>
      {!user && (
        <Backdrop colorTheme="loader">
          <Bar />
        </Backdrop>
      )}
      {children}
    </AuthContext.Provider>
  );
}
