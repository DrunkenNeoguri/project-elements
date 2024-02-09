import styled from "styled-components";
import { fontsStyle } from "../utils/util-fonts";
import { ButtonColorProp } from "../types/button";
import { setButtonBackgroundColor } from "../policies/button";

const Wrapper = styled.button<ButtonColorProp>`
  background-color: ${(props) => setButtonBackgroundColor(props.$bgColor)};

  display: flex;
  justify-content: center;
  align-items: center;

  ${fontsStyle.semibold.semibold16};
  color: #ffffff;

  width: 100%;
  height: 44px;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const StButton = Object.assign({}, { Wrapper });
