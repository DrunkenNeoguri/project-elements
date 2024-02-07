import styled from "styled-components";
import { fontsStyle } from "../utils/util-fonts";

const Wrapper = styled.button`
  background-color: #1e90ff;

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
