export type TravelType = "domestic" | "foreign";
export type TravelTypeProp = { $travelType: "domestic" | "foreign" };
export type TicketProp = {
  id?: string;
  travelType: TravelType;
  title: string;
  departureAt: string;
  travelPeriod: string;
  destination: string;
};
