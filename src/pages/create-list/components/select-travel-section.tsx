import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import { StSelectTravelSection } from "../styles/select-travel-section";

export default function SelectTravelSection() {
  return (
    <StSelectTravelSection.Wrapper>
      <Description
        title={`새로운 여행을\n준비하시는군요!\n\n이번엔 어디로 떠니시나요?`}
        color="#ffffff"
      />
      <StSelectTravelSection.ButtonBox>
        <Button type="button" text="해외 여행" colorType="primary-reverse" />
        <Button type="button" text="국내 여행" colorType="secondary-reverse" />
        <Button type="button" text="돌아가기" colorType="invalid" />
      </StSelectTravelSection.ButtonBox>
    </StSelectTravelSection.Wrapper>
  );
}
