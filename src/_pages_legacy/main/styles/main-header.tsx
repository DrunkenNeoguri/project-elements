import styled from "styled-components";
import { colors } from "../../../utils/util-color";

const Header = styled.div`
  background-color: ${colors.primaryDeep};
  display: flex;
  flex-direction: column;

  border-radius: 0 0 12px 12px;
  padding: 44px 16px 36px;
  width: 100%;
  height: 224px;
  box-sizing: border-box;

  filter: drop-shadow(0px 4px 4px ${colors.shadow});
`;

export const StMainHeader = Object.assign(
  {},
  {
    Header,
  }
);
