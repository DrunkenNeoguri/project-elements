import styled from "styled-components";
import { colors } from "../../utils/util-color";
import { fontsStyle } from "../../utils/util-fonts";

const Wrapper = styled.nav`
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  position: fixed;

  border-radius: 12px 0 0 12px;
  padding: 14px 16px 20px 16px;
  width: 294px;
  height: 100vh;
  bottom: 0;

  z-index: 3;
  right: 0;

  box-sizing: border-box;

  filter: drop-shadow(-8px 0 4px ${colors.shadow});
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`;

const Title = styled.h3`
  ${fontsStyle.bold.bold20};
  color: ${colors.white};

  padding: 0;
  margin: 0;
`;

const HamburgerButton = styled.button`
  background-color: transparent;
  color: ${colors.white};

  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  box-sizing: border-box;

  cursor: pointer;
`;

const AreaBorder = styled.div`
  background-color: ${colors.white};

  width: 100%;
  height: 2px;
  border-radius: 8px;

  margin: 24px 0 32px;
`;

const SearchBox = styled.form`
  position: relative;
`;

const SearchInput = styled.input`
  background-color: ${colors.invalidLight};
  display: block;

  ${fontsStyle.medium.medium16};
  color: ${colors.black};

  border: 1px solid ${colors.invalid};
  border-radius: 4px;
  padding: 8px 36px 8px 8px;
  margin: 0;
  width: 100%;
  height: 36px;
  box-sizing: border-box;

  filter: drop-shadow(0 2px 4px ${colors.shadow});

  ::placeholder {
    ${fontsStyle.medium.medium14};
    color: ${colors.invalid};
  }
`;

const SearchIcon = styled.button`
  background-color: transparent;
  position: absolute;

  border: none;
  outline: none;
  padding: 0;
  margin: 8px 8px 8px auto;
  width: 20px;
  height: 20px;
  right: 0;

  z-index: 1;

  box-sizing: border-box;

  cursor: pointer;
`;

const ButtonBox = styled.menu`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  padding: 0;
  width: 100%;

  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 16px;

  ${fontsStyle.bold.bold20};
  color: ${colors.white};

  border: none;
  border-radius: 4px;
  outline: none;
  width: 100%;
  height: 44px;
  box-sizing: border-box;

  cursor: pointer;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
    transition: ease-in-out 0.2s;
    path {
      fill: ${colors.black};
    }
  }
`;

const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 0 12px 0 0;
  margin: 0;
`;

const LogOutText = styled.button`
  background-color: transparent;
  display: inline;

  ${fontsStyle.medium.medium14};
  color: ${colors.white};

  border: none;
  outline: none;
  padding: 0;
  margin: auto 4px 0 auto;

  cursor: pointer;
`;

export const StSidebar = Object.assign(
  {},
  {
    Wrapper,
    TitleBox,
    Title,
    HamburgerButton,
    AreaBorder,
    SearchBox,
    SearchInput,
    SearchIcon,
    ButtonBox,
    Button,
    ButtonIcon,
    LogOutText,
  }
);
