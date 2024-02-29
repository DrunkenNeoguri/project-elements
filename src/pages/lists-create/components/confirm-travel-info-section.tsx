import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import useConfirmTravelInfoSection from "../hooks/use-confirm-travel-info-section";
import { StConfirmTravelInfoSection } from "../styles/confirm-travel-info-section";
import TravelInfoTicket from "./travel-info-ticket";

export default function ConfirmTravelInfoSection() {
  const { travelListData, moveToNextStep, backToPreviousStep } =
    useConfirmTravelInfoSection();
  return (
    <StConfirmTravelInfoSection.Wrapper>
      <Description
        title={`입력하신 정보가\n맞는지 확인해주세요!`}
        color="#ffffff"
      />
      <TravelInfoTicket
        travelType={travelListData.travelType}
        title={travelListData.title}
        departureAt={travelListData.departureAt}
        travelPeriod={travelListData.travelPeriod}
        destination={travelListData.destination}
      />
      <StConfirmTravelInfoSection.ButtonBox>
        <Button
          type="submit"
          text="네, 맞아요!"
          colorType="primary-reverse"
          onClick={() => moveToNextStep()}
        />
        <Button
          type="button"
          text="아니에요."
          colorType="invalid"
          onClick={() => backToPreviousStep()}
        />
      </StConfirmTravelInfoSection.ButtonBox>
    </StConfirmTravelInfoSection.Wrapper>
  );
}
