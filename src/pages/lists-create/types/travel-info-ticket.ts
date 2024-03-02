import { TravelCaseType } from "../../../common/types/template";

export type StTravelCaseType = { $travelType: TravelCaseType };

export type TicketInfoType = {
  id?: string;
  travelType: TravelCaseType;
  title: string;
  departureAt: string;
  travelPeriod: string;
  destination: string;
};
