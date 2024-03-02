import { TravelInfoType } from "../../../common/types/template";

export const isButtonVisible = (formInput: TravelInfoType) => {
  if (formInput.title.trim() !== "") {
    return true;
  }
  if (formInput.departureAt.trim() !== "") {
    return true;
  }
  if (formInput.travelPeriod.trim() !== "") {
    return true;
  }
  if (formInput.destination.trim() !== "") {
    return true;
  }
  return false;
};
