import { TravelType } from "../types/travel-info-ticket";

export const isTravelTypeDomesticOrForeign = (travelType: TravelType) => {
  return travelType === "foreign" ? "#4E95FF" : "#008D18";
};
