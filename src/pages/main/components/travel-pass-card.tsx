import { useNavigate } from "react-router-dom";
import { StTravelPassCard } from "../styles/travel-pass-card";
import { TravelPassType } from "../types/travel-pass-card";

export default function TravelPassCard(props: TravelPassType) {
  const navigate = useNavigate();
  const { id, travelType, title, departureAt, travelPeriod, destination } =
    props;

  return (
    <StTravelPassCard.Button
      id={id}
      type="button"
      onClick={() => navigate(`/lists/main?travelid=${id}`)}
    >
      <StTravelPassCard.Header $travelType={travelType}>
        <span>TICKET</span>
      </StTravelPassCard.Header>
      <StTravelPassCard.Area>
        <StTravelPassCard.ContentBox>
          <StTravelPassCard.TextBox>
            <StTravelPassCard.Title>여행 이름</StTravelPassCard.Title>
            <StTravelPassCard.Text>{title}</StTravelPassCard.Text>
          </StTravelPassCard.TextBox>
          <StTravelPassCard.ContentSubBox>
            <StTravelPassCard.TextBox>
              <StTravelPassCard.Title>출발 일자</StTravelPassCard.Title>
              <StTravelPassCard.Text>{departureAt}</StTravelPassCard.Text>
            </StTravelPassCard.TextBox>

            <StTravelPassCard.TextBox>
              <StTravelPassCard.Title>여행 기간</StTravelPassCard.Title>
              <StTravelPassCard.Text>{travelPeriod}일</StTravelPassCard.Text>
            </StTravelPassCard.TextBox>

            <StTravelPassCard.TextBox>
              <StTravelPassCard.Title>여행지</StTravelPassCard.Title>
              <StTravelPassCard.Text>{destination}</StTravelPassCard.Text>
            </StTravelPassCard.TextBox>
          </StTravelPassCard.ContentSubBox>
        </StTravelPassCard.ContentBox>
        <StTravelPassCard.BarcodeImage
          src="images/img-confirm-travel-info-section-barcode.webp"
          alt=""
        />
      </StTravelPassCard.Area>
    </StTravelPassCard.Button>
  );
}
