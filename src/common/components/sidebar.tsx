import { StSidebar } from "../styles/sidebar";
import { SideBarPropType } from "../types/sidebar";
import SideBarIcon from "../../assets/icons/svg-header-sidebar-icon.svg?react";
import SearchIcon from "../../assets/icons/svg-sidebar-search-icon.svg?react";
import ListManagementIcon from "../../assets/icons/svg-sidebar-list-management-icon.svg?react";
import ExchangeIcon from "../../assets/icons/svg-sidebar-exchange-icon.svg?react";
import SettingIcon from "../../assets/icons/svg-sidebar-setting-icon.svg?react";
import useSidebar from "../hooks/use-sidebar";

export default function SideBar(props: SideBarPropType) {
  const {
    formInput,
    setFormInput,
    setQueryStringForSearchTravelData,
    signOutAndMoveToSignIn,
  } = useSidebar();
  const { onClose, openState } = props;
  return (
    <StSidebar.Wrapper id="sidebar" $openState={openState}>
      <StSidebar.TitleBox>
        <StSidebar.Title>준비물 챙겼어?</StSidebar.Title>
        <StSidebar.HamburgerButton onClick={onClose}>
          <SideBarIcon />
        </StSidebar.HamburgerButton>
      </StSidebar.TitleBox>
      <StSidebar.SearchBox
        onSubmit={(e) => {
          setQueryStringForSearchTravelData(e, onClose);
        }}
      >
        <StSidebar.SearchIcon type="submit">
          <SearchIcon />
        </StSidebar.SearchIcon>
        <StSidebar.SearchInput
          placeholder="등록했던 여행을 찾으시나요?"
          value={formInput}
          onChange={(e) => setFormInput(e.currentTarget.value)}
        />
      </StSidebar.SearchBox>
      <StSidebar.AreaBorder />
      <StSidebar.ButtonBox>
        <StSidebar.Button>
          <ListManagementIcon />
          여행 리스트 관리
        </StSidebar.Button>
        <StSidebar.Button>
          <ExchangeIcon />
          환율 정보
        </StSidebar.Button>
        <StSidebar.Button>
          <SettingIcon />
          설정
        </StSidebar.Button>
      </StSidebar.ButtonBox>
      <StSidebar.LogOutText
        type="button"
        onClick={() => signOutAndMoveToSignIn()}
      >
        로그아웃
      </StSidebar.LogOutText>
    </StSidebar.Wrapper>
  );
}
