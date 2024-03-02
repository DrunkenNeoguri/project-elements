import { TravelInfoType } from "../../../common/types/template";

export const isNotFullInputedInForm = (formInput: TravelInfoType) => {
  const { title, departureAt, travelPeriod, destination } = formInput;
  if (
    title.trim() === "" ||
    departureAt.trim() === "" ||
    travelPeriod.trim() === "" ||
    destination.trim() === ""
  ) {
    return true;
  }
  return false;
};
