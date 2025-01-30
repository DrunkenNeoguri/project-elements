export type TravelBasicType = {
  id: string;
  travelType: TravelType;
  title: string;
  departureAt: string;
  travelPeriod: number;
  destination: string;
};

export type TravelType = "domestic" | "foreign";
