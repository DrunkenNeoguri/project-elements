export type TravelBasicInfoType = {
  id: string;
  travelType: "domestic" | "foreign";
  title: string;
  departureAt: string;
  travelPeriod: number;
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
  travelInfo: TravelBasicInfoType;
  elementList: ElementCategoryType[];
};

export type TemplateType = {
  templateMaker: string;
  templateID: string;
  template: ElementCategoryType[];
};
