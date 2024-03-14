import { StHeader } from "../styles/header";
import CreateListIcon from "../../assets/icons/svg-header-create-list-icon.svg?react";
import BackArrowIcon from "../../assets/icons/svg-header-arrow-icon.svg?react";
import SideBarIcon from "../../assets/icons/svg-header-sidebar-icon.svg?react";
import SideBar from "./sidebar";
import useHeader from "../hooks/use-header";
import { HeaderPropType } from "../types/header";
import { placeSVGIconByHeaderType } from "../utils/header";

export default function Header(props: HeaderPropType) {
  const { headerType } = props;
  const { openState, activeLeftButton, activeRightButton, closeSideBar } =
    useHeader();
  const leftIconList = [<CreateListIcon />, <BackArrowIcon />];
  const rightIconList = [<SideBarIcon />, <></>];

  return (
    <>
      <StHeader.Header>
        <StHeader.Button onClick={() => activeLeftButton(headerType)}>
          {leftIconList[placeSVGIconByHeaderType(headerType)]}
        </StHeader.Button>
        {/* <StHeader.Title>제목</StHeader.Title> */}
        <StHeader.Button onClick={() => activeRightButton(headerType)}>
          {rightIconList[placeSVGIconByHeaderType(headerType)]}
        </StHeader.Button>
      </StHeader.Header>
      <SideBar openState={openState} onClose={() => closeSideBar()} />
    </>
  );
}
