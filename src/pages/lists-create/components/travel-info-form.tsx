import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import Input from "../../../common/components/input";
import { colors } from "../../../utils/util-color";
import useTravelInfoForm from "../hooks/use-travel-info-form";
import { isNotFullInputedInForm } from "../policies/travel-info-form";
import { StTravelInfoForm } from "../styles/travel-info-form";
import {
  convertColorTypeByFormInputState,
  convertTextByFormInputState,
} from "../utils/travel-info-form";

export default function TravelInfoForm() {
  const { formInput, setFormInput, updateTravelInfoData, backToPreviousStep } =
    useTravelInfoForm();
  return (
    <StTravelInfoForm.Form onSubmit={(e) => updateTravelInfoData(e)}>
      <Description title={`여행 일정을 알려주세요!`} color={colors.white} />
      <Input
        id="title"
        title="여행 제목"
        onChange={(e) =>
          setFormInput({ ...formInput, title: e.currentTarget.value })
        }
        value={formInput.title}
        placeholder="띄어쓰기 포함 20글자 이내"
        type="text"
        colorTheme="white"
      />
      <Input
        id="departureAt"
        title="출발 일자"
        onChange={(e) =>
          setFormInput({ ...formInput, departureAt: e.currentTarget.value })
        }
        value={formInput.departureAt}
        type="date"
        colorTheme="white"
      />
      <Input
        id="travelPeriod"
        title="여행 기간"
        onChange={(e) =>
          setFormInput({ ...formInput, travelPeriod: e.currentTarget.value })
        }
        placeholder="1~30까지 입력 가능"
        value={formInput.travelPeriod}
        type="number"
        colorTheme="white"
      />
      <Input
        id="destination"
        title="여행지"
        onChange={(e) =>
          setFormInput({ ...formInput, destination: e.currentTarget.value })
        }
        value={formInput.destination}
        type="text"
        colorTheme="white"
      />
      <StTravelInfoForm.ButtonBox>
        <Button
          disabled={isNotFullInputedInForm(formInput)}
          type="submit"
          text={convertTextByFormInputState(formInput)}
          colorType={convertColorTypeByFormInputState(formInput)}
        />
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
