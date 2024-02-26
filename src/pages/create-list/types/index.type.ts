export type TravelType = "domestic" | "foreign";

export type TravelInfoProp = {
  travelType: TravelType;
  title: string;
  departureAt: string;
  travelPeriod: string;
  destination: string;
};
