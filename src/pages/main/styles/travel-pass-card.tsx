import styled from "styled-components";
import { fontsStyle } from "../../../utils/util-fonts";
import { colors } from "../../../utils/util-color";
import { convertHeaderColorByTravelType } from "../utils/travel-pass-card";
import { StTravelCaseType } from "../types/travel-pass-card";

const Button = styled.button`
  background: ${colors.white};

  outline: none;
  border: none;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  width: 100%;

  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;

  filter: drop-shadow(0 4px 4px ${colors.shadow});
`;

const Header = styled.div<StTravelCaseType>`
  background-color: ${(props) =>
    convertHeaderColorByTravelType(props.$travelType)};

  ${fontsStyle.medium.medium16}

  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
  padding: 4px 16px 0 16px;
  box-sizing: border-box;
`;

const Area = styled.div`
  display: flex;
  justify-content: space-between;

  text-align: left;

  padding: 18px 12px 18px 12px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;

  width: 100%;
`;

const ContentSubBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;

  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.span`
  ${fontsStyle.light.light10};
  color: ${colors.black};
`;
const Text = styled.span`
  ${fontsStyle.medium.medium14};
  color: ${colors.black};
`;

const BarcodeImage = styled.img`
  width: 24px;
  height: 80px;
`;

export const StTravelPassCard = Object.assign(
  {},
  {
    Button,
    Header,
    Area,
    ContentBox,
    ContentSubBox,
    TextBox,
    Title,
    Text,
    BarcodeImage,
  }
);
