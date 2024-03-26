import { TravelInfoType } from "../../../common/types/template";

export const isNotFullInputedInForm = (formInput: TravelInfoType) => {
  const { title, departureAt, travelPeriod, destination } = formInput;
  if (
    title.trim() === "" ||
    departureAt.trim() === "" ||
    (travelPeriod < 1 && travelPeriod > 30) ||
    destination.trim() === ""
  ) {
    return true;
  }
  return false;
};
