import styled from "styled-components";
import { fontsStyle } from "../../utils/util-fonts";
import { colors } from "../../utils/util-color";
import { StCounterButtonType, StCounterColorThemeType } from "../types/counter";
import { convertColorThemeByInputColorThemeType } from "../utils/input";
import { isButtonPlacedLeft } from "../policies/counter";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 12px 0;
`;

const Label = styled.label<StCounterColorThemeType>`
  ${fontsStyle.bold.bold12};
  color: ${(props) =>
    convertColorThemeByInputColorThemeType(props.$colorTheme)};
  margin-bottom: 4px;
`;

const Box = styled.div`
  display: flex;
`;

const Viewer = styled.span<StCounterColorThemeType>`
  background-color: ${colors.invalidLight};
  display: flex;
  justify-content: center;
  align-items: center;

  ${fontsStyle.medium.medium16}
  color: ${colors.black};

  width: 100%;
  border: 1px solid
    ${(props) => convertColorThemeByInputColorThemeType(props.$colorTheme)};
  margin: 0;
  outline: none;

  box-sizing: border-box;
`;

const Button = styled.button<StCounterButtonType>`
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  ${fontsStyle.medium.medium12};
  color: ${colors.primary};

  border: none;
  border-radius: ${(props) =>
    isButtonPlacedLeft(props.$direction) ? "4px 0 0 4px" : "0 4px 4px 0"};
  outline: none;
  padding: 0;
  margin: 0;

  width: 100%;
  max-width: 60px;
  height: 44px;

  cursor: pointer;
  filter: ${(props) =>
    isButtonPlacedLeft(props.$direction)
      ? `drop-shadow(1px 0px 1px ${colors.shadow})`
      : `drop-shadow(-1px 0px 1px ${colors.shadow})`};
`;

export const StCounter = Object.assign(
  {},
  { Wrapper, Label, Box, Viewer, Button }
);
