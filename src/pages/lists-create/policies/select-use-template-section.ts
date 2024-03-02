import { TravelInfoType } from "../../../common/types/template";

export const isFullInputedInTravelInfoData = (formInput: TravelInfoType) => {
  const { travelType, title, departureAt, travelPeriod, destination } =
    formInput;
  if (travelType !== "domestic" && travelType !== "foreign") {
    return false;
  }
  if (
    title.trim() === "" ||
    departureAt.trim() === "" ||
    travelPeriod.trim() === "" ||
    destination.trim() === ""
  ) {
    return false;
  }
  return true;
};
