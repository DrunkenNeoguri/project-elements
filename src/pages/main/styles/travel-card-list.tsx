import styled from "styled-components";
import { colors } from "../../../utils/util-color";
import { fontsStyle } from "../../../utils/util-fonts";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  margin: 0;
`;

const Title = styled.h3`
  ${fontsStyle.bold.bold16};
  color: ${colors.black};

  padding: 0;
  margin: 0;
`;

const ResetButton = styled.button`
  background-color: transparent;
  display: flex;

  ${fontsStyle.medium.medium14};
  color: ${colors.black};

  border: none;
  outline: none;
  padding: 0;
  margin: 0;

  cursor: pointer;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StTravelListCard = Object.assign(
  {},
  {
    Section,
    TitleBox,
    Title,
    ResetButton,
    ListBox,
  }
);
