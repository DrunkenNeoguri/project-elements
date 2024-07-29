import { TravelBasicType } from "./travel.types";

export type ElementBasicType = {
  elementName: string;
  elementId: string;
  elementColorTheme: string;
  isChecked: boolean;
  elementOrder: number;
};

export type CategoryBasicType = {
  categoryName: string;
  categoryId: string;
  categoryColorTheme: string;
  categoryOrder: number;
  categoryElements: ElementBasicType[];
};

export type ElementsType = {
  [key in number]: CategoryBasicType;
};

export type ElementsBasicType = {
  info: TravelBasicType;
  elements: ElementsType;
};
