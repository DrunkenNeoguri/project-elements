"use client";
import {
  ConfigIcon,
  DocsSearchIcon,
  FolderIcon,
  HamburgerIcon,
} from "../../assets/icons/icons";
import Link from "next/link";
import AuthService from "../../services/auth-services";
import Button from "../button/button";
import { useRouter } from "next/navigation";

export default function SideBar({ onClick }: { onClick: () => void }) {
  const router = useRouter();
  const userInfo = localStorage.getItem("userInfo");
  const username = userInfo && JSON.parse(userInfo).username;

  const handleLogOutAccount = async () => {
    document.body.style.overflow = "";
    const logOutState = await AuthService.postLogOutProcess();
    if (logOutState === "OK") {
      return router.push("/user/login");
    }
  };

  const handleMoveToTravelCreate = () => {
    document.body.style.overflow = "";
    return router.push("/travel/create");
  };

  // ?CONCERN: Button Hover 효과 구현 어떻게 할지 고민..
  // ?CONCERN: Dimd와 분리하면서 Sidebar도 애니메이션 우떠케 처리할지..
  // background-color: ${colors.white};
  // color: ${colors.black};
  // transition: ease-in-out 0.2s;
  // path {
  //   fill: ${colors.black};
  // }

  if (!userInfo || !username) {
    return;
  }

  return (
    <nav className="bg-primary flex flex-col rounded-l-xl py-6 pr-4 pl-6 w-[calc(100%-64px)] h-[100vh] z-50 b-0 r-0 box-border absolute right-0 overflow-hidden font-gmarketSans drop-shadow-[-8px_0_4px_#00000064]">
      <div className="flex justify-between items-start mb-8">
        <div className="flex flex-col">
          <span className="font-medium20 text-white p-0 m-0">
            {username} 님,
          </span>
          <span className="font-medium20 text-white p-0 m-0">반가워요!</span>
        </div>
        <button
          title="사이드바 닫기"
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
          href="/search/mylist"
          className="bg-transparent flex items-center gap-3 font-bold20 text-white border-none rounded outline-none w-full box-border h-11 cursor-pointer"
        >
          <div className="w-6 h-6">
            <FolderIcon />
          </div>
          <span className="mt-1">내 여행 리스트</span>
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
