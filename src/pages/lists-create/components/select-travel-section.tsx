import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import useSelectTravelSection from "../hooks/use-select-travel-section";
import { StSelectTravelSection } from "../styles/select-travel-section";

export default function SelectTravelSection() {
  const { setTravelTypeAndMoveNextStep, backToMainPage } =
    useSelectTravelSection();
  return (
    <StSelectTravelSection.Wrapper>
      <Description
        title={`새로운 여행을\n준비하시는군요!\n\n이번엔 어디로 떠니시나요?`}
        color="#ffffff"
      />
      <StSelectTravelSection.ButtonBox>
        <Button
          type="button"
          text="해외 여행"
          colorType="primary-reverse"
          onClick={() => setTravelTypeAndMoveNextStep("foreign")}
        />
        <Button
          type="button"
          text="국내 여행"
          colorType="secondary-reverse"
          onClick={() => setTravelTypeAndMoveNextStep("domestic")}
        />
        <Button
          type="button"
          text="돌아가기"
          colorType="invalid"
          onClick={() => backToMainPage()}
        />
      </StSelectTravelSection.ButtonBox>
    </StSelectTravelSection.Wrapper>
  );
}
