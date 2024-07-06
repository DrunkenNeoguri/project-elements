"use client";
import {
  ConfigIcon,
  CurrencyIcon,
  DocsSearchIcon,
  FolderIcon,
  HamburgerIcon,
  NewsIcon,
} from "../../assets/icons/icons";
import Link from "next/link";
import AuthService from "../../services/auth-services";
import Button from "../button/button";
import { useRouter } from "next/navigation";

export default function SideBar({ onClick }: { onClick: () => void }) {
  const router = useRouter();

  const handleLogOutAccount = async () => {
    document.body.style.overflow = "";
    const logOutState = await AuthService.postLogOutProcess();
    if (logOutState === "OK") {
      return router.push("/login");
    }
  };

  const handleMoveToTravelCreate = () => {
    document.body.style.overflow = "";
    return router.push("/travel/create");
  };

  return (
    <nav className="bg-primary flex flex-col rounded-l-xl pt-[22px] pb-6 pr-4 pl-6 w-[calc(100%-64px)] h-[100vh] z-50 b-0 r-0 box-border absolute right-0 overflow-hidden font-gmarketSans">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold20 text-white p-0 m-0">준비물 챙겼어?</h3>
        <button
          className="bg-transparent text-white p-0 m-0 border-none outline-none box-border cursor-pointer"
          onClick={onClick}
        >
          <HamburgerIcon />
        </button>
      </div>

      <Button
        colorTheme="primaryReverse"
        type="button"
        onClick={handleMoveToTravelCreate}
        styles="h-13"
      >
        새 여행 추가하기
      </Button>

      <div className="bg-white w-full h-[2px] rounded-lg mt-6 mb-8" />
      <div className="flex flex-col items-start gap-9 p-0 w-full h-[calc(100%-180px)] mb-auto">
        <Link
          href="/manage"
          className="bg-transparent flex items-center gap-3 font-bold20 text-white border-none rounded outline-none w-full box-border h-11 cursor-pointer"
        >
          <div className="w-6 h-6">
            <FolderIcon />
          </div>
          <span className="mt-1">여행 리스트 관리</span>
        </Link>

        <Link
          href="/template"
          className="bg-transparent flex items-center gap-3 font-bold20 text-white border-none rounded outline-none w-full box-border h-11 cursor-pointer"
        >
          <div className="w-6 h-6">
            <DocsSearchIcon />
          </div>
          <span className="mt-1">템플릿 찾기</span>
        </Link>

        <Link
          href="/currency"
          className="bg-transparent flex items-center gap-3 font-bold20 text-white border-none rounded outline-none w-full box-border h-11 cursor-pointer"
        >
          <div className="w-6 h-6">
            <CurrencyIcon />
          </div>
          <span className="mt-1">환율 정보</span>
        </Link>

        <Link
          href="/news"
          className="bg-transparent flex items-center gap-3 font-bold20 text-white border-none rounded outline-none w-full box-border h-11 cursor-pointer"
        >
          <div className="w-6 h-6">
            <NewsIcon />
          </div>
          <span className="mt-1">여행 뉴스</span>
        </Link>

        <Link
          href="/config"
          className="bg-transparent flex items-center gap-3 font-bold20 text-white border-none rounded outline-none w-full box-border h-11 cursor-pointer"
        >
          <div className="w-6 h-6">
            <ConfigIcon />
          </div>
          <span className="mt-1">설정</span>
        </Link>
      </div>
      <button
        className="inline ml-auto text-white font-medium14 border-none outline-none p-0"
        type="button"
        onClick={handleLogOutAccount}
      >
        로그아웃
      </button>
    </nav>
  );
}
