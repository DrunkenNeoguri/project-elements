import { TravelListType } from "../../../common/types/template";
import { userInfoType } from "../../../common/types/user";
import { CardListType } from "../types/travel-card-list";

const convertSearchValueInSearchTypeCardList = (
  searchValue?: string | null
) => {
  if (!searchValue) {
    return;
  }
  if (searchValue.length > 8) {
    return searchValue.substring(0, 7) + "...";
  }
  return searchValue;
};

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
      return `'${convertSearchValueInSearchTypeCardList(
        searchValue
      )}'로 찾은 여행들`;
    case "all":
      return "생성된 여행 리스트";
    default:
      return;
  }
};

export const setResentTravelByTravelLists = (
  travelLists: TravelListType[],
  userInfo: userInfoType
) => {
  const resentTravelId = userInfo.recentTravel;
  const resentTravelData = travelLists.filter(
    (travelInfo) => travelInfo.id === resentTravelId
  )[0];
  return !resentTravelData ? [] : resentTravelData;
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
