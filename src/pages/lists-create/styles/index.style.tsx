import styled from "styled-components";
import { colors } from "../../../utils/util-color";

const Section = styled.section`
  background-color: ${colors.primaryDeep};

  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const StCreateListPage = Object.assign({}, { Section });
