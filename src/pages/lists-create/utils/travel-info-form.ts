import { TravelInfoType } from "../../../common/types/template";

export const convertColorTypeByFormInputState = (formInput: TravelInfoType) => {
  const { title, departureAt, travelPeriod, destination } = formInput;
  if (
    title.trim() === "" ||
    departureAt.trim() === "" ||
    (travelPeriod < 1 && travelPeriod > 30) ||
    destination.trim() === ""
  ) {
    return "invalid-reverse";
  }
  return "primary-reverse";
};

export const convertTextByFormInputState = (formInput: TravelInfoType) => {
  const { title, departureAt, travelPeriod, destination } = formInput;
  if (
    title.trim() === "" ||
    departureAt.trim() === "" ||
    (travelPeriod < 1 && travelPeriod > 30) ||
    destination.trim() === ""
  ) {
    return "내용을 전부 입력해 주세요.";
  }
  return "다음 단계로";
};
