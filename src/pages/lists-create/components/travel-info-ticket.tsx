import { StTravelInfoTicket } from "../styles/travel-info-ticket";
import { TicketInfoType } from "../types/travel-info-ticket";

export default function TravelInfoTicket(props: TicketInfoType) {
  const { id, travelType, title, departureAt, travelPeriod, destination } =
    props;

  return (
    <StTravelInfoTicket.Section id={id}>
      <StTravelInfoTicket.Cover>
        <StTravelInfoTicket.Header $travelType={travelType}>
          <span>TICKET</span>
        </StTravelInfoTicket.Header>
        <StTravelInfoTicket.Area>
          <StTravelInfoTicket.ContentBox>
            <StTravelInfoTicket.TextBox>
              <StTravelInfoTicket.Title>여행 이름</StTravelInfoTicket.Title>
              <StTravelInfoTicket.Text>{title}</StTravelInfoTicket.Text>
            </StTravelInfoTicket.TextBox>
            <StTravelInfoTicket.TextBox>
              <StTravelInfoTicket.Title>출발 일자</StTravelInfoTicket.Title>
              <StTravelInfoTicket.Text>{departureAt}</StTravelInfoTicket.Text>
            </StTravelInfoTicket.TextBox>

            <StTravelInfoTicket.TextBox>
              <StTravelInfoTicket.Title>여행 기간</StTravelInfoTicket.Title>
              <StTravelInfoTicket.Text>{travelPeriod}</StTravelInfoTicket.Text>
            </StTravelInfoTicket.TextBox>

            <StTravelInfoTicket.TextBox>
              <StTravelInfoTicket.Title>여행지</StTravelInfoTicket.Title>
              <StTravelInfoTicket.Text>{destination}</StTravelInfoTicket.Text>
            </StTravelInfoTicket.TextBox>
          </StTravelInfoTicket.ContentBox>
          <StTravelInfoTicket.BarcodeBox>
            <StTravelInfoTicket.BarcodeImage
              src="images/img-confirm-travel-info-section-barcode.webp"
              alt=""
            />
          </StTravelInfoTicket.BarcodeBox>
        </StTravelInfoTicket.Area>
      </StTravelInfoTicket.Cover>
    </StTravelInfoTicket.Section>
  );
}
