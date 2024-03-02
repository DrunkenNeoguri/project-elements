import styled from "styled-components";
import { fontsStyle } from "../../utils/util-fonts";
import { StInputColorThemeType } from "../types/input";
import { convertColorThemeByInputColorThemeType } from "../utils/input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 12px 0;
`;

const TextInput = styled.input<StInputColorThemeType>`
  background-color: #f7f7f7;

  ${fontsStyle.medium.medium16}
  color: #373737;

  width: 100%;
  border: 1px solid
    ${(props) => convertColorThemeByInputColorThemeType(props.$colorTheme)};
  border-radius: 4px;
  padding: 13px 0 13px 16px;
  margin: 0;
  outline: none;

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
  color: #d80000;
  margin-top: 1px;
`;

export const StInput = Object.assign(
  {},
  { Wrapper, TextInput, Label, ErrorMessage }
);
