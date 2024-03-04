import styled from "styled-components";
import { colors } from "../../utils/util-color";

export const Container = styled.section`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Header = styled.header`
  width: 375px;
  height: 54px;
  position: fixed;
  z-index: 5;
  top: 0;
  color: ${colors.white};
`;
