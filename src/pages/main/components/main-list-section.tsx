import useMainListSection from "../hooks/use-main-list-section";
import { StMainListSection } from "../styles/main-list-section";
import { setUpcomingTravelByTravelLists } from "../utils/travel-card-list";
import MainEmptySection from "./main-empty-section";
import Portal from "../../../common/components/portal";
import Modal from "../../../common/components/modal";
import TravelCardList from "./travel-card-list";
import { TransparentLoader } from "../../../common/components/loader";

export default function MainListSection() {
  const { traveLists, searchQueryString, modalState } = useMainListSection();

  if (!traveLists) {
    return <TransparentLoader />;
  }

  return (
    <StMainListSection.Section>
      {traveLists.length === 0 ? (
        <MainEmptySection />
      ) : searchQueryString !== null ? (
        <StMainListSection.SearchArea>
          <TravelCardList cardListType="search" travelLists={traveLists} />
        </StMainListSection.SearchArea>
      ) : (
        <>
          <TravelCardList
            cardListType="recent"
            travelLists={setUpcomingTravelByTravelLists(traveLists)}
          />
          <TravelCardList
            cardListType="upcoming"
            travelLists={setUpcomingTravelByTravelLists(traveLists)}
          />
          <TravelCardList cardListType="all" travelLists={traveLists} />
        </>
      )}
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
