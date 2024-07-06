"use client";
import { ChangeEvent, FormEvent, ReactNode } from "react";
import {
  ActiveSearchIcon,
  HamburgerIcon,
  PrevIcon,
  SearchIcon,
} from "../../assets/icons/icons";
import useHeader from "./use-header";
import SideBar from "../sidebar/sidebar";
import Portal from "../modal/portal";

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
  const {
    shadow,
    router,
    openSearch,
    setOpenSearch,
    keyword,
    setKeyword,
    openSidebar,
    setOpenSidebar,
  } = useHeader();

  // dynamic css styling
  const addPrevCursor = activePrev ? "cursor-pointer" : "cursor-default";
  const addSideBarCursor = useSideBar ? "cursor-pointer" : "cursor-default";
  const addViewShadow = shadow
    ? "drop-shadow-[0px_4px_4px_#00000064] ease-in-out duration-[200ms]"
    : "";

  const handleMoveToPrevPage = () => {
    return router.back();
  };

  const handleSwitchSearch = () => {
    return setOpenSearch(!openSearch);
  };

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    return setKeyword(e.currentTarget.value);
  };

  const handleSwitchSidebar = () => {
    document.body.style.overflow =
      document.body.style.overflow !== "hidden" ? "hidden" : "auto";
    return setOpenSidebar(!openSidebar);
  };

  const handleSearchKeyword = (e: FormEvent) => {
    e.preventDefault();
    document.body.style.overflow === "auto";
    return router.push(`/search?keyword=${keyword}`);
  };

  const handleSearchButton = () => {
    if (!keyword || keyword.trim() === "") {
      return handleSwitchSearch();
    }
    return router.push(`/search?keyword=${keyword}`);
  };

  const sidebarBgStyle = openSidebar
    ? "opacity-1 animate-[fadeIn_0.2s]"
    : "opacity-0 animate-[fadeOut_0.2s]";

  return (
    <>
      <header
        className={
          "w-full h-[72px] p-4 bg-primaryDeep text-white rounded-b-xl fixed max-w-[379px] z-40 " +
          addViewShadow
        }
      >
        <div className="h-full w-full flex justify-between items-center">
          {activePrev && (
            <button
              className={"w-8 h-8 bg-transparent mr-auto ml-0 " + addPrevCursor}
              disabled={!activePrev}
              onClick={handleMoveToPrevPage}
            >
              {activePrev && <PrevIcon />}
            </button>
          )}

          {title && (
            <h1 className="font-medium24 text-white ml-auto mr-auto">
              {title}
            </h1>
          )}

          {activeSearch &&
            (openSearch ? (
              <form className="w-full mr-2" onSubmit={handleSearchKeyword}>
                <input
                  className="bg-invalidLight w-full font-medium16 text-black border rounded m-0 outline-none box-border py-2 pl-4 pr-10 border-black relative"
                  value={keyword}
                  onChange={handleChangeKeyword}
                />
                <button
                  type="button"
                  onClick={handleSearchButton}
                  className="w-8 h-8 bg-transparent mr-0 ml-auto cursor-pointer absolute top-5 right-[56px]"
                >
                  <ActiveSearchIcon />
                </button>
              </form>
            ) : (
              <button
                className="w-8 h-8 bg-transparent mr-2 ml-auto cursor-pointer"
                onClick={handleSwitchSearch}
              >
                <SearchIcon />
              </button>
            ))}

          {actionButton}

          {useSideBar && (
            <button
              className={
                "w-8 h-8 bg-transparent mr-0 ml-0 cursor-pointer pb-1" +
                addSideBarCursor
              }
              disabled={!useSideBar}
              onClick={handleSwitchSidebar}
            >
              <HamburgerIcon />
            </button>
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
