import { CardListType } from "../types/travel-card-list";

export const isCardListTypeSearch = (cardListType: CardListType) => {
  return cardListType === "search" ? true : false;
};
