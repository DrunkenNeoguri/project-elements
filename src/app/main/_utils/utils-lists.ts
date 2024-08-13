import { TravelBasicType } from "../../../types/travel.types";

export const filterClosedTravelData = (list: TravelBasicType[]) => {
  const nowTime = Date.now();

  const closedTravelList = list.filter((travelData) => {
    return new Date(travelData.departureAt).getTime() > nowTime;
  });

  closedTravelList.sort(
    (a, b) =>
      new Date(a.departureAt).getTime() - new Date(b.departureAt).getTime()
  );

  return [closedTravelList[0]];
};

export const filterRecentViewTravelData = (list: TravelBasicType[]) => {
  const userInfo = localStorage.getItem("userInfo") ?? "";
  const parseUserInfo = JSON.parse(userInfo);

  const recentViewTravelData = list.filter((travelData) => {
    return parseUserInfo.recentTravel === travelData.id;
  });

  return recentViewTravelData;
};
