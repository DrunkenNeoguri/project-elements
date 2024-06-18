import styled from "styled-components";
import { fontsStyle } from "../../utils/util-fonts";
import { StInputColorThemeType } from "./input.types";
import { convertColorThemeByInputColorThemeType } from "./input.utils";
import { colors } from "../../utils/util-color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 12px 0;
`;

const TextInputBox = styled.div`
  position: relative;
`;

const TextInput = styled.input<StInputColorThemeType>`
  background-color: ${colors.invalidLight};

  ${fontsStyle.medium.medium16}
  color: ${colors.black};

  width: 100%;
  border: 1px solid
    ${(props) => convertColorThemeByInputColorThemeType(props.$colorTheme)};
  border-radius: 4px;
  padding: ${(props) =>
    props.$checkErrorMessage ? "12px 44px 12px 16px" : "12px 0px 12px 12px;"};
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

const ValidIcon = styled.div`
  position: absolute;

  padding: 12px 12px 12px 0;
  margin: 0;
  top: 0;
  right: 0;

  z-index: 1;

  box-sizing: border-box;
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

export const InputBox = Object.assign(
  {},
  { Container, TextInputBox, TextInput, ValidIcon, Label, ErrorMessage }
);
