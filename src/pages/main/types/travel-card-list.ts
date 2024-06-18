import { TravelListType } from "../../../types/template.types";

export type CardListType = "recent" | "upcoming" | "search" | "all";

export type TravelCardListPropType = {
  cardListType: CardListType;
  travelLists: TravelListType[];
};
