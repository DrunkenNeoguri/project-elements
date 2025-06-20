'use client';
import { ReactNode, useContext } from 'react';
import { ExternalContext } from '../../../providers/external-provider';
import AuthProvider from '../../../providers/auth-provider';
import Header from '../../../components/header/header';
import { EditIcon, ShareIcon } from '../../../assets/icons/icons';
import ElementProvider from '../../../providers/elements-provider';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  const { handleExternalList } = useContext(ExternalContext);
  const searchParams = useSearchParams();
  const elementId = searchParams?.get('id');

  const handleSwitchCategoryBottomSheet = () => {
    handleExternalList('element-option-elements');
  };

  return (
    <AuthProvider>
      <Header
        activePrev={true}
        actionButton={
          <div className="flex gap-4">
            <button
              title="준비물 목록 옵션 열기"
              type="button"
              className="flex justify-center items-center w-8 h-8 bg-transparent mr-0 ml-auto mt-1 cursor-pointer pb-1"
              onClick={handleSwitchCategoryBottomSheet}
            >
              <ShareIcon />
            </button>
            <Link
              title="준비물 목록 옵션 열기"
              type="button"
              className="flex justify-center items-center w-8 h-8 bg-transparent mr-0 ml-auto mt-1 cursor-pointer pb-1"
              href={`/element/edit?id=${elementId}`}
            >
              <EditIcon />
            </Link>
          </div>
        }
      />
      <section className="flex flex-col w-full justify-center items-center">
        <ElementProvider>{children}</ElementProvider>
      </section>
    </AuthProvider>
  );
}
