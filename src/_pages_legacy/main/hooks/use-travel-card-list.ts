import { useSearchParams } from "react-router-dom";
import { TravelListType } from "../../../types/template.types";
import { useAtom } from "jotai";
import { sidebarSearchValueAtom } from "../../../components/sidebar/sidebar";

export default function useTravelCardList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryString = searchParams.get("search");
  const [, setFormInput] = useAtom(sidebarSearchValueAtom);

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

  const initializeSearchResult = () => {
    setFormInput("");
    searchParams.delete("search");
    return setSearchParams(searchParams);
  };

  return {
    searchQueryString,
    filterTravelListBySearchValue,
    initializeSearchResult,
  };
}
