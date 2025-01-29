"use client";
import { ReactNode } from "react";
import { HamburgerIcon, PrevIcon, SearchIcon } from "../../assets/icons/icons";
import useHeader from "./use-header";
import SideBar from "../sidebar/sidebar";
import Portal from "../portal/portal";
import Link from "next/link";
import { SearchFormField } from "./components/search-form-field";

type HeaderPropType = {
  activePrev?: boolean;
  activeSearch?: boolean;
  useSideBar?: boolean;
  actionButton?: ReactNode;
  title?: string;
};

// TODO: Sidebar와 Dimd 분리, 애니메이션 처리 등에 대해서 고민해봐야함.

export default function Header(props: HeaderPropType) {
  const {
    activePrev = false,
    activeSearch = false,
    useSideBar = false,
    actionButton,
    title,
  } = props;
  const { shadow, router, openSidebar, setOpenSidebar, currentPath } =
    useHeader();

  // dynamic css styling
  const addViewShadow = shadow
    ? "drop-shadow-[0px_4px_4px_#00000064] ease-in-out duration-[200ms]"
    : "";

  // condition check
  const isCurrentPathElement = currentPath.indexOf("/element") !== -1;
  const isCurrentPathSearch = currentPath.indexOf("/search") !== -1;

  const handleMoveToPrevPage = () => {
    return isCurrentPathElement ? router.replace("/main") : router.back();
  };

  const handleSwitchSidebar = () => {
    document.body.style.overflow =
      document.body.style.overflow !== "hidden" ? "hidden" : "auto";
    return setOpenSidebar(!openSidebar);
  };

  const sidebarBgStyle = openSidebar
    ? "opacity-1 animate-[fadeIn_0.2s]"
    : "opacity-0 animate-[fadeOut_0.2s]";

  return (
    <>
      <header
        className={
          "w-full h-[72px] p-4 bg-primaryDeep text-white rounded-b-xl fixed max-w-[379px] z-40 top-0" +
          addViewShadow
        }
      >
        <div className="h-full w-full flex justify-between items-center">
          {activePrev ? (
            <button
              className="w-8 h-8 bg-transparent ml-0 cursor-pointer"
              onClick={handleMoveToPrevPage}
            >
              <PrevIcon />
            </button>
          ) : (
            <div className="bg-transparent w-8 h-8" />
          )}

          {title && (
            <h1 className="font-medium24 text-white ml-auto mr-auto">
              {title}
            </h1>
          )}

          {activeSearch &&
            (isCurrentPathSearch ? (
              <SearchFormField />
            ) : (
              <Link
                title="검색창 열기"
                className="w-8 h-8 bg-transparent mr-3 ml-auto cursor-pointer"
                href="/search"
              >
                <SearchIcon />
              </Link>
            ))}

          {actionButton}

          {useSideBar ? (
            <button
              title="사이드바 열기"
              className="bg-transparent mr-0 ml-0 cursor-pointer"
              onClick={handleSwitchSidebar}
            >
              <HamburgerIcon />
            </button>
          ) : (
            <div className="bg-transparent w-8 h-8" />
          )}
        </div>
      </header>
      {openSidebar && (
        <Portal container={document.body}>
          <div
            className={
              "max-w-[379px] h-[100vh] w-full bg-shadowModal fixed z-50 " +
              sidebarBgStyle
            }
          >
            <SideBar onClick={handleSwitchSidebar} />
          </div>
        </Portal>
      )}
    </>
  );
}
