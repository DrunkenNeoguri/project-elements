import { TravelListType } from "../../../common/types/template";

export type CardListType = "recent" | "upcoming" | "search" | "all";

export type TravelCardListPropType = {
  cardListType: CardListType;
  travelLists: TravelListType[];
};
