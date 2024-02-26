import styled from "styled-components";
import { fontsStyle } from "../utils/util-fonts";
import { InputColorThemeProp } from "../types/input";
import { isColorThemeBlackOrWhite } from "../policies/input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 12px 0;
`;

const TextInput = styled.input<InputColorThemeProp>`
  background-color: #f7f7f7;

  ${fontsStyle.medium.medium16}
  color: #373737;

  width: 100%;
  border: 1px solid ${(props) => isColorThemeBlackOrWhite(props.$colorTheme)};
  border-radius: 4px;
  padding: 13px 0 13px 16px;
  margin: 0;
  outline: none;

  box-sizing: border-box;
`;

const Label = styled.label<InputColorThemeProp>`
  ${fontsStyle.semibold.semibold12};
  color: ${(props) => isColorThemeBlackOrWhite(props.$colorTheme)};
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
