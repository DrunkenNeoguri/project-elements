import useTravelCardList from "../hooks/use-travel-card-list";
import { StTravelListCard } from "../styles/travel-card-list";
import { TravelCardListPropType } from "../types/travel-card-list";
import {
  convertCardListNameByCardListType,
  convertDateByTravelDepartureAt,
  hasSearchKeywordInList,
} from "../utils/travel-card-list";
import ResetIcon from "../../../assets/icons/svg-travel-card-list-reset-icon.svg?react";
import TravelPassCard from "./travel-pass-card";
import { isCardListTypeSearch } from "../policies/index.policy";
import MainSearchEmptySection from "./main-search-empty-section";

//@TODO: 당장은 이용자도, 데이터도 적으니까 서버에서는 데이터 한번만 받아오고
// 거기서 무한 스크롤과 서칭 모두 적용하는 식으로 함.

// 단, 데이터 받아오는 속도가 느려도 너무 느릴 정도로 유저가 많아지고, 데이터도 많아지면
// 그 때부터 데이터 잘라서 받아오게 하면서 무한 스크롤과 서칭 기능 전부 API 콜로 적용하도록 함.

export default function TravelCardList(props: TravelCardListPropType) {
  const { cardListType, travelLists } = props;
  const {
    searchQueryString,
    filterTravelListBySearchValue,
    initializeSearchResult,
  } = useTravelCardList();

  return (
    <StTravelListCard.Section>
      <StTravelListCard.TitleBox>
        <StTravelListCard.Title>
          {convertCardListNameByCardListType(cardListType, searchQueryString)}
        </StTravelListCard.Title>
        {isCardListTypeSearch(cardListType) && (
          <StTravelListCard.ResetButton
            onClick={() => initializeSearchResult()}
          >
            <ResetIcon /> 검색 초기화
          </StTravelListCard.ResetButton>
        )}
      </StTravelListCard.TitleBox>
      <StTravelListCard.ListBox>
        {hasSearchKeywordInList(
          cardListType,
          filterTravelListBySearchValue(travelLists).length
        ) && <MainSearchEmptySection />}
        {filterTravelListBySearchValue(travelLists)?.map((doc) => {
          return (
            <TravelPassCard
              key={doc.id + cardListType}
              id={doc.id}
              title={doc.title}
              travelType={doc.travelType}
              travelPeriod={doc.travelPeriod}
              departureAt={convertDateByTravelDepartureAt(doc.departureAt)}
              destination={doc.destination}
            />
          );
        })}
      </StTravelListCard.ListBox>
    </StTravelListCard.Section>
  );
}
