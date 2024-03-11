import styled from "styled-components";
import { fontsStyle } from "../../utils/util-fonts";
import { StInputColorThemeType } from "../types/input";
import { convertColorThemeByInputColorThemeType } from "../utils/input";
import { colors } from "../../utils/util-color";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 12px 0;
`;

const TextInput = styled.input<StInputColorThemeType>`
  background-color: ${colors.invalidLight};

  ${fontsStyle.medium.medium16}
  color: ${colors.black};

  width: 100%;
  border: 1px solid
    ${(props) => convertColorThemeByInputColorThemeType(props.$colorTheme)};
  border-radius: 4px;
  padding: 13px 0 13px 16px;
  margin: 0;
  outline: none;

  box-sizing: border-box;

  &::placeholder {
    color: ${colors.invalid};
    ${fontsStyle.medium.medium14}
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(0.79);
    padding: 0 13px 0 0;
    margin: 0;
    font-size: 22px;
    cursor: pointer;
  }
`;

const Label = styled.label<StInputColorThemeType>`
  ${fontsStyle.bold.bold12};
  color: ${(props) =>
    convertColorThemeByInputColorThemeType(props.$colorTheme)};
  margin-bottom: 4px;
`;

const ErrorMessage = styled.span`
  ${fontsStyle.medium.medium10};
  color: ${colors.error};
  margin-top: 1px;
`;

export const StInput = Object.assign(
  {},
  { Wrapper, TextInput, Label, ErrorMessage }
);
