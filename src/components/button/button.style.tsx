import styled from "styled-components";
import { fontsStyle } from "../../utils/util-fonts";
import {
  convertBackgroundColorByButtonColorType,
  convertFontColorByButtonColorType,
} from "./button.utils";
import { StButtonColorType } from "./button.types";

const Wrapper = styled.button<StButtonColorType>`
  background-color: ${(props) =>
    convertBackgroundColorByButtonColorType(props.$colorType)};

  display: flex;
  justify-content: center;
  align-items: center;

  ${fontsStyle.bold.bold16};
  color: ${(props) => convertFontColorByButtonColorType(props.$colorType)};

  width: 100%;
  height: 44px;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;

  cursor: pointer;
`;

export const StButton = Object.assign({}, { Wrapper });
