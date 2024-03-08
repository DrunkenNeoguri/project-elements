import { StSidebar } from "../styles/sidebar";
import { SideBarPropType } from "../types/sidebar";
import SideBarIcon from "../../assets/icons/svg-header-sidebar-icon.svg?react";
import ListManagementIcon from "../../assets/icons/svg-sidebar-list-management-icon.svg?react";
import ExchangeIcon from "../../assets/icons/svg-sidebar-exchange-icon.svg?react";
import SettingIcon from "../../assets/icons/svg-sidebar-setting-icon.svg?react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../utils/util-firebase";
import { signOut } from "firebase/auth";

export default function SideBar(props: SideBarPropType) {
  const navigate = useNavigate();
  const { onClose } = props;
  return (
    <StSidebar.Wrapper>
      <StSidebar.TitleBox>
        <StSidebar.Title>준비물 챙겼어?</StSidebar.Title>
        <StSidebar.HamburgerButton onClick={onClose}>
          <SideBarIcon />
        </StSidebar.HamburgerButton>
      </StSidebar.TitleBox>
      <StSidebar.SearchBox placeholder="등록했던 여행을 찾으시나요?" />
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
        onClick={() => {
          signOut(firebaseAuth);
          return navigate("/users/signin");
        }}
      >
        로그아웃
      </StSidebar.LogOutText>
    </StSidebar.Wrapper>
  );
}
