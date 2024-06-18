import { TravelCaseType, TravelInfoType } from "../../../types/template.types";

export type StTravelCaseType = { $travelType: TravelCaseType };

export type TicketInfoType = TravelInfoType & {
  id?: string;
};
