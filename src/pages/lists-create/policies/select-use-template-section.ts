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
    (travelPeriod < 1 && travelPeriod > 30) ||
    destination.trim() === ""
  ) {
    return false;
  }
  return true;
};
