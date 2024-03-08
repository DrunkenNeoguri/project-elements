import { TravelListType } from "../../../common/types/template";

export default function useTravelCardList() {
  const upcomingTravel = (travelLists: TravelListType[]) => {
    const currentTime = Date.now();
    return travelLists?.sort((a, b) => {
      return (
        currentTime -
        Number(b.departureAt) -
        (currentTime - Number(a.departureAt))
      );
    })[0];
  };
  return { upcomingTravel };
}
