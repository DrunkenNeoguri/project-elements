import { Suspense } from "react";
import useMainListSection from "../hooks/use-main-list-section";
import { StMainListSection } from "../styles/main-list-section";
import { setUpcomingTravelByTravelLists } from "../utils/travel-card-list";
import TravelCardList from "./travel-card-list";
import MainEmptySection from "./main-empty-section";
import Portal from "../../../common/components/portal";
import Modal from "../../../common/components/modal";

export default function MainListSection() {
  const { traveLists, searchQueryString, loginState, moveToSignInPage } =
    useMainListSection();

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
      {!loginState && (
        <Portal
          children={
            <Modal
              title="로그인 세션 만료"
              modalType="alert"
              context={`장시간 사이트 내에 활동이 없어\n로그인 상태가 해제되었습니다.`}
              primary={{
                text: "로그인 화면으로 돌아가기",
                func: () => moveToSignInPage(),
              }}
            />
          }
          container={document.body}
        />
      )}
    </StMainListSection.Section>
  );
}
