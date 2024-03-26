import { Suspense } from "react";
import useMainListSection from "../hooks/use-main-list-section";
import { StMainListSection } from "../styles/main-list-section";
import { setUpcomingTravelByTravelLists } from "../utils/travel-card-list";
import TravelCardList from "./travel-card-list";
import MainEmptySection from "./main-empty-section";
import Portal from "../../../common/components/portal";
import Modal from "../../../common/components/modal";

export default function MainListSection() {
  const { traveLists, searchQueryString, modalState } = useMainListSection();

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
      {modalState.state && (
        <Portal
          children={
            <Modal
              title={modalState.title}
              modalType="alert"
              context={modalState.context}
              primary={{
                text: "로그인 화면으로 돌아가기",
                func: () => modalState.closeFunc(),
              }}
            />
          }
          container={document.body}
        />
      )}
    </StMainListSection.Section>
  );
}
