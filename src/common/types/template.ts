export type TravelType = "domestic" | "foreign";

export type TravelInfoPropType = {
  travelType: TravelType;
  title: string;
  departureAt: string;
  travelPeriod: string;
  destination: string;
};

export type ElementCategoryColorType = "red" | "blue" | "green";

export type ElementCategoryType = {
  categoryName: string;
  categoryColor: string;
  elements: TravelElementType[];
};

export type TravelElementType = {
  elementName: string;
  Charge?: string;
  ChargeUID?: string;
  isChecked: boolean;
};

export type TravelElementListType = {
  travelInfo: TravelInfoPropType;
  elementList: ElementCategoryType[];
};

export type TemplateType = {
  templateMaker: string;
  templateID: string;
  template: ElementCategoryType[];
};
