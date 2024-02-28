import { TravelInfoProp } from "../types/index.type";

export const isButtonVisible = (inputData: TravelInfoProp) => {
  return inputData.title.trim() !== "" &&
    inputData.departureAt.trim() !== "" &&
    inputData.travelPeriod.trim() !== "" &&
    inputData.destination.trim() !== ""
    ? true
    : false;
};
