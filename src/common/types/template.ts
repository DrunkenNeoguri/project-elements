export type TravelCaseType = "domestic" | "foreign";

export type TravelInfoType = {
  travelType: TravelCaseType;
  title: string;
  departureAt: string;
  travelPeriod: string;
  destination: string;
};

export type TravelListType = TravelInfoType & {
  id: string;
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
  travelInfo: TravelInfoType;
  elementList: ElementCategoryType[];
};

export type TemplateType = {
  templateMaker: string;
  templateID: string;
  template: ElementCategoryType[];
};
