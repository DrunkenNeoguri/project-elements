import { Suspense } from "react";
import useMainListSection from "../hooks/use-main-list-section";
import { StMainListSection } from "../styles/main-list-section";
import { setUpcomingTravelByTravelLists } from "../utils/travel-card-list";
import TravelCardList from "./travel-card-list";

export default function MainListSection() {
  const { traveLists, searchQueryString } = useMainListSection();

  return (
    <StMainListSection.Section>
      <Suspense fallback={<>loading...</>}>
        {/* <TravelCardList listType="recent" /> */}
        {searchQueryString !== null ? (
          <StMainListSection.SearchArea>
            <TravelCardList listType="search" travelLists={traveLists} />
          </StMainListSection.SearchArea>
        ) : (
          <>
            <TravelCardList
              listType="upcoming"
              travelLists={setUpcomingTravelByTravelLists(traveLists)}
            />
            <TravelCardList listType="all" travelLists={traveLists} />
          </>
        )}
      </Suspense>
    </StMainListSection.Section>
  );
}
