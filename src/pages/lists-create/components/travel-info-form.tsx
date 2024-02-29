import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import Input from "../../../common/components/input";
import useTravelInfoForm from "../hooks/use-travel-info-form";
import { isButtonVisible } from "../policies/travel-info-form";
import { StTravelInfoForm } from "../styles/travel-info-form";

export default function TravelInfoForm() {
  const { formData, setFormData, updateTravelListData, backToPreviousStep } =
    useTravelInfoForm();
  return (
    <StTravelInfoForm.Form onSubmit={() => updateTravelListData()}>
      <Description title={`여행 일정을 알려주세요!`} color="#ffffff" />
      <Input
        id="title"
        title="여행 제목"
        onChange={(e) =>
          setFormData({ ...formData, title: e.currentTarget.value })
        }
        value={formData.title}
        type="text"
        colorTheme="white"
      />
      <Input
        id="departureAt"
        title="출발 일자"
        onChange={(e) =>
          setFormData({ ...formData, departureAt: e.currentTarget.value })
        }
        value={formData.departureAt}
        type="text"
        colorTheme="white"
      />
      <Input
        id="travelPeriod"
        title="여행 기간"
        onChange={(e) =>
          setFormData({ ...formData, travelPeriod: e.currentTarget.value })
        }
        value={formData.travelPeriod}
        type="text"
        colorTheme="white"
      />
      <Input
        id="destination"
        title="여행지"
        onChange={(e) =>
          setFormData({ ...formData, destination: e.currentTarget.value })
        }
        value={formData.destination}
        type="text"
        colorTheme="white"
      />
      <StTravelInfoForm.ButtonBox>
        {isButtonVisible(formData) && (
          <Button
            type="submit"
            text="다음 단계로"
            colorType="primary-reverse"
          />
        )}
        <Button
          type="button"
          text="돌아가기"
          colorType="invalid"
          onClick={() => backToPreviousStep()}
        />
      </StTravelInfoForm.ButtonBox>
    </StTravelInfoForm.Form>
  );
}
