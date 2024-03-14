import { StHeader } from "../styles/header";
import CreateListIcon from "../../assets/icons/svg-header-create-list-icon.svg?react";
import SideBarIcon from "../../assets/icons/svg-header-sidebar-icon.svg?react";
import SideBar from "./sidebar";
import useHeader from "../hooks/use-header";

export default function Header() {
  const { openState, openSideBar, closeSideBar, moveToCreateList } =
    useHeader();
  return (
    <>
      <StHeader.Header>
        <StHeader.Button onClick={() => moveToCreateList()}>
          <CreateListIcon />
        </StHeader.Button>
        {/* <StHeader.Title>제목</StHeader.Title> */}
        <StHeader.Button onClick={() => openSideBar()}>
          <SideBarIcon />
        </StHeader.Button>
      </StHeader.Header>
      <SideBar openState={openState} onClose={() => closeSideBar()} />
    </>
  );
}
