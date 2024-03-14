import { TravelCaseType, TravelInfoType } from "../../../common/types/template";

export type StTravelCaseType = { $travelType: TravelCaseType };

export type TicketInfoType = TravelInfoType & {
  id?: string;
};
