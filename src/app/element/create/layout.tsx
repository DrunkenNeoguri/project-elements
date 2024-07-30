"use client";
import { ReactNode, useContext } from "react";
import Header from "../../../components/header/header";
import AuthProvider from "../../../providers/auth-provider";
import { ExternalContext } from "../../../providers/external-provider";
import { HamburgerIcon } from "../../../assets/icons/icons";

export default function Layout({ children }: { children: ReactNode }) {
  const { handleExternalList } = useContext(ExternalContext);

  const handleSwitchCategoryBottomSheet = () => {
    handleExternalList("element-create-selectElementList");
  };

  return (
    <AuthProvider>
      <Header
        activePrev={true}
        actionButton={
          <button
            title="준비물 목록 옵션 열기"
            type="button"
            className="w-8 h-8 bg-transparent mr-0 ml-auto cursor-pointer pb-1"
            onClick={handleSwitchCategoryBottomSheet}
          >
            <HamburgerIcon />
          </button>
        }
      />
      <section className="flex flex-col w-full justify-center items-center">
        {children}
      </section>
    </AuthProvider>
  );
}
