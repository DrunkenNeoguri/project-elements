import styled from "styled-components";
import { fontsStyle } from "../../../utils/util-fonts";
import { StTravelCaseType } from "../types/travel-info-ticket";
import { convertHeaderColorByTravelType } from "../util/travel-info-ticket";

const Section = styled.section`
  background: none;

  border: none;
  width: 100%;
  height: 100%;
  padding: 14px 44px 0;
  box-sizing: border-box;
`;

const Cover = styled.div`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  border-radius: 0 16px 16px 0;
  overflow: hidden;
`;

const Header = styled.div<StTravelCaseType>`
  background-color: ${(props) =>
    convertHeaderColorByTravelType(props.$travelType)};

  ${fontsStyle.medium.medium16}

  display: flex;
  align-items: center;

  height: 40px;
  padding: 4px 16px 0 16px;
  box-sizing: border-box;
`;

const Area = styled.div`
  display: flex;
  justify-content: space-between;

  text-align: left;

  padding: 24px 16px 36px 16px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BarcodeBox = styled.div`
  display: flex;

  padding: 24px 16px 0 auto;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.span`
  ${fontsStyle.light.light10};
  color: #373737;
`;
const Text = styled.span`
  ${fontsStyle.medium.medium14};
  color: #373737;
`;

const BarcodeImage = styled.img`
  width: 36px;
`;

export const StTravelInfoTicket = Object.assign(
  {},
  {
    Section,
    Cover,
    Header,
    Area,
    ContentBox,
    BarcodeBox,
    TextBox,
    Title,
    Text,
    BarcodeImage,
  }
);
