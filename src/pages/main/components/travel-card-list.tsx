import useTravelCardList from "../hooks/use-travel-card-list";
import { StTravelListCard } from "../styles/travel-card-list";
import { TravelCardListPropType } from "../types/travel-card-list";
import {
  convertCardListNameByCardListType,
  convertDateByTravelDepartureAt,
} from "../utils/travel-card-list";
import TravelPassCard from "./travel-pass-card";

//@TODO: 당장은 이용자도, 데이터도 적으니까 서버에서는 데이터 한번만 받아오고
// 거기서 무한 스크롤과 서칭 모두 적용하는 식으로 함.

// 단, 데이터 받아오는 속도가 느려도 너무 느릴 정도로 유저가 많아지고, 데이터도 많아지면
// 그 때부터 데이터 잘라서 받아오게 하면서 무한 스크롤과 서칭 기능 전부 API 콜로 적용하도록 함.

export default function TravelCardList(props: TravelCardListPropType) {
  const { listType, travelLists } = props;
  const { searchQueryString, filterTravelListBySearchValue } =
    useTravelCardList();

  return (
    <StTravelListCard.Section>
      <StTravelListCard.ListTitle>
        {convertCardListNameByCardListType(listType, searchQueryString)}
      </StTravelListCard.ListTitle>
      <StTravelListCard.ListBox>
        {filterTravelListBySearchValue(travelLists)?.map((doc) => {
          return (
            <TravelPassCard
              key={doc.id + listType}
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
