import styled from "styled-components";
import { fontsStyle } from "../utils/util-fonts";
import { ButtonColorProp } from "../types/button";
import {
  isButtonBgColorPrimaryOrInvalidOrSecondary,
  isButtonTextColorPrimaryOrInvalidOrSecondary,
} from "../policies/button";

const Wrapper = styled.button<ButtonColorProp>`
  background-color: ${(props) =>
    isButtonBgColorPrimaryOrInvalidOrSecondary(props.$colorType)};

  display: flex;
  justify-content: center;
  align-items: center;

  ${fontsStyle.bold.bold16};
  color: ${(props) =>
    isButtonTextColorPrimaryOrInvalidOrSecondary(props.$colorType)};

  width: 100%;
  height: 44px;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;

  cursor: pointer;
`;

export const StButton = Object.assign({}, { Wrapper });
