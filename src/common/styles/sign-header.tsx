import styled from "styled-components";
import { fontsStyle } from "../utils/util-fonts";

const Wrapper = styled.header`
  background-color: #0f4a84;

  display: flex;
  justify-content: space-around;

  ${fontsStyle.bold.bold24};
  color: #ffffff;

  width: 100%;
  height: 84px;
  border-radius: 0 0 16px 16px;
  padding: 26px 16px 0 16px;
  box-sizing: border-box;

  filter: drop-shadow(0 4px 4px #00000064);
`;

export const StSignHeader = Object.assign({}, { Wrapper });
