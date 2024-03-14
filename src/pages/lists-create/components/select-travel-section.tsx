import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import { colors } from "../../../utils/util-color";
import useSelectTravelSection from "../hooks/use-select-travel-section";
import { StSelectTravelSection } from "../styles/select-travel-section";

export default function SelectTravelSection() {
  const { updateTravelTypeAndMoveToNextStep, backToMainPage } =
    useSelectTravelSection();
  return (
    <StSelectTravelSection.Section>
      <Description
        title={`새로운 여행을\n준비하시는군요!\n\n이번엔 어디로 떠니시나요?`}
        color={colors.white}
      />
      <StSelectTravelSection.ButtonBox>
        <Button
          type="button"
          text="해외 여행"
          colorType="primary-reverse"
          onClick={() => updateTravelTypeAndMoveToNextStep("foreign")}
        />
        <Button
          type="button"
          text="국내 여행"
          colorType="secondary-reverse"
          onClick={() => updateTravelTypeAndMoveToNextStep("domestic")}
        />
        <Button
          type="button"
          text="돌아가기"
          colorType="invalid"
          onClick={() => backToMainPage()}
        />
      </StSelectTravelSection.ButtonBox>
    </StSelectTravelSection.Section>
  );
}
