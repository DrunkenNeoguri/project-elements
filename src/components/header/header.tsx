"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { HamburgerIcon, PrevIcon } from "../../assets/icons/icons";
import useHeader from "./use-header";

type HeaderPropType = {
  activePrev?: boolean;
  activeSearch?: boolean;
  useSideBar?: boolean;
  actionButton?: ReactNode;
  title?: string;
};

// <SideBar openState={openState} onClose={() => closeSideBar()} />

export default function Header(props: HeaderPropType) {
  const {
    activePrev = false,
    activeSearch = false,
    useSideBar = false,
    actionButton,
    title,
  } = props;
  const router = useRouter();
  const { shadow } = useHeader();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // dynamic css styling
  const addPrevCursor = activePrev ? "cursor-pointer" : "cursor-default";
  const addSideBarCursor = useSideBar ? "cursor-pointer" : "cursor-default";
  const addViewShadow = shadow
    ? "drop-shadow-[0px_4px_4px_#00000064] ease-in-out duration-[200ms]"
    : "";

  const handleMoveToPrevPage = () => {
    router.back();
  };

  const handleSwitchSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header
      className={
        "w-full h-auto px-4 py-6 bg-primaryDeep text-white rounded-b-xl fixed max-w-[379px] z-50 " +
        addViewShadow
      }
    >
      <div className="h-6 w-full flex justify-center">
        {activePrev && (
          <button
            className={"w-6 h-4 bg-transparent mr-auto ml-0 " + addPrevCursor}
            disabled={!activePrev}
            onClick={handleMoveToPrevPage}
          >
            {activePrev && <PrevIcon />}
          </button>
        )}

        {title && <h1 className="font-medium24 text-white">{title}</h1>}

        {activeSearch && (
          <div>
            <input />
            <button></button>
          </div>
        )}

        {actionButton}

        {useSideBar && (
          <button
            className={
              "w-6 h-4 bg-transparent mr-auto ml-0 cursor-pointer" +
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
  );
}
