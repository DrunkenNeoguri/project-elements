import styled from "styled-components";
import { buttonStyle } from "../../utils/utilButtons";

interface ButtonProp {
  styleType: "full" | "xl" | "lg" | "md" | "sm" | "xs" | "custom";
  bgColor?: string;
  textColor?: string;
}

export const Button = styled.button<ButtonProp>`
  ${({ styleType }) => (styleType ? buttonStyle(styleType) : "")}
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#009688")};
  color: ${({ textColor }) => (textColor ? textColor : "#ffffff")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;
