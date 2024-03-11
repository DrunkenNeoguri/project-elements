import { TravelListType } from "../../../common/types/template";
import { CardListType } from "../types/travel-card-list";

export const convertCardListNameByCardListType = (
  listType?: CardListType,
  searchValue?: string | null
) => {
  switch (listType) {
    case "recent":
      return "최근 확인했던 여행";
    case "upcoming":
      return "다가오는 여행";
    case "search":
      return `'${searchValue}'로 검색된 여행 리스트`;
    case "all":
      return "생성된 여행 리스트";
    default:
      return;
  }
};

export const setUpcomingTravelByTravelLists = (
  travelLists: TravelListType[]
) => {
  const currentTime = Date.now();
  const upcomingData = travelLists?.sort((a, b) => {
    return (
      currentTime -
      Number(b.departureAt) -
      (currentTime - Number(a.departureAt))
    );
  })[0];
  return !upcomingData ? [] : [upcomingData];
};

export const convertDateByTravelDepartureAt = (departureAt: string) => {
  const convertTime = departureAt.split("-");
  const [year, month, date] = [convertTime[0], convertTime[1], convertTime[2]];

  return `${year}. ${month}. ${date}.`;
};
