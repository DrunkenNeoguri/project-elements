import styled from "styled-components";
import { fontsStyle } from "../../../common/utils/util-fonts";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  box-sizing: border-box;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  margin: auto 0 24px;
  box-sizing: border-box;
`;

const TicketWrapper = styled.section`
  width: 100%;
  height: 100px;
  padding: 14px 44px 0;
  box-sizing: border-box;
`;

const TicketBox = styled.div`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  border-radius: 0 16px 16px 0;
  overflow: hidden;
`;

const TicketHeader = styled.div`
  background-color: #008d18;

  display: flex;
  align-items: center;

  height: 40px;
  padding: 0 16px;
`;

const TicketInfoSection = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 24px 16px 36px 16px;
`;

const TicketInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TicketBarcodeArea = styled.div`
  display: flex;

  padding: 24px 16px 0 auto;
`;

const TicketInfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TicketInfoTitle = styled.span`
  ${fontsStyle.regular.regular10};
  color: #373737;
`;
const TicketInfoText = styled.span`
  ${fontsStyle.medium.medium14};
  color: #373737;
`;

const Image = styled.img`
  width: 36px;
`;

export const StConfirmTravelInfoSection = Object.assign(
  {},
  {
    Wrapper,
    ButtonBox,
    TicketWrapper,
    TicketBox,
    TicketHeader,
    TicketInfoSection,
    TicketInfoArea,
    TicketBarcodeArea,
    TicketInfoTextBox,
    TicketInfoTitle,
    TicketInfoText,
    Image,
  }
);
