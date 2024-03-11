import { useSearchParams } from "react-router-dom";
import { TravelListType } from "../../../common/types/template";

export default function useTravelCardList() {
  const [searchParams] = useSearchParams();
  const searchQueryString = searchParams.get("search");

  const filterTravelListBySearchValue = (travelLists: TravelListType[]) => {
    if (searchQueryString !== null) {
      const filterTravelLists = travelLists.filter((data) => {
        return (
          data.title.includes(searchQueryString) ||
          data.destination.includes(searchQueryString)
        );
      });

      return filterTravelLists.sort(
        (a, b) =>
          new Date(a.departureAt).getTime() - new Date(b.departureAt).getTime()
      );
    }
    return travelLists;
  };
  return { searchQueryString, filterTravelListBySearchValue };
}
