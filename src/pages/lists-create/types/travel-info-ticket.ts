import { TravelType } from "../../../common/types/template";

export type TravelTypeProp = { $travelType: TravelType };

export type TicketProp = {
  id?: string;
  travelType: TravelType;
  title: string;
  departureAt: string;
  travelPeriod: string;
  destination: string;
};
