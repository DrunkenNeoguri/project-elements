import { Suspense } from "react";
import useMainListSection from "../hooks/use-main-list-section";
import { StMainListSection } from "../styles/main-list-section";
import { setUpcomingTravelByTravelLists } from "../utils/travel-card-list";
import TravelCardList from "./travel-card-list";
import MainEmptySection from "./main-empty-section";

export default function MainListSection() {
  const { traveLists, searchQueryString } = useMainListSection();

  return (
    <StMainListSection.Section>
      <Suspense fallback={<>loading...</>}>
        <TravelCardList
          cardListType="recent"
          travelLists={setUpcomingTravelByTravelLists(traveLists)}
        />
        {traveLists.length === 0 ? (
          <MainEmptySection />
        ) : searchQueryString !== null ? (
          <StMainListSection.SearchArea>
            <TravelCardList cardListType="search" travelLists={traveLists} />
          </StMainListSection.SearchArea>
        ) : (
          <>
            <TravelCardList
              cardListType="upcoming"
              travelLists={setUpcomingTravelByTravelLists(traveLists)}
            />
            <TravelCardList cardListType="all" travelLists={traveLists} />
          </>
        )}
      </Suspense>
    </StMainListSection.Section>
  );
}
