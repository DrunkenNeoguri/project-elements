import { TravelCaseType } from "../../../common/types/template";

export const convertHeaderColorByTravelType = (travelCase: TravelCaseType) => {
  return travelCase === "foreign" ? "#4E95FF" : "#008D18";
};
