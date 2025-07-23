export type TravelBasicType = {
  id: string;
  travelType: TravelType;
  title: string;
  departure_at: string;
  travelPeriod: number;
  destination: string;
};

export type TravelType = 'domestic' | 'foreign';
