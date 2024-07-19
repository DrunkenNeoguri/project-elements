import { TravelBasicType } from "./travel.types";

export type ElementBasicType = {
  elementName: string;
  Charge?: string;
  ChargeUID?: string;
  isChecked: boolean;
};

export type CategoryBasicType = {
  categoryName: string;
  categoryColor: string;
  elements: ElementBasicType[];
};

export type ElementsType = {
  [key in number]: CategoryBasicType;
};

export type ElementsBasicType = {
  info: TravelBasicType;
  elements: ElementsType;
};
