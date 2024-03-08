import { TravelListType } from "../../../common/types/template";

export type CardListType = "recent" | "upcoming" | "all";

export type TravelCardListPropType = {
  listType: CardListType;
  travelLists: TravelListType[];
};
