import { CardListType } from "../types/travel-card-list";

export const isCardListTypeRecentOrUpcomiing = (listType: CardListType) => {
  return listType === "recent" || listType === "upcoming" ? true : false;
};

export const isCardListTypeALL = (listType: CardListType) => {
  return listType === "all" ? true : false;
};
