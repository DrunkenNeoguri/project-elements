import { StTravelListCard } from "../styles/travel-card-list";
import { TravelCardListPropType } from "../types/travel-card-list";
import {
  convertCardListNameByCardListType,
  convertDateByTravelDepartureAt,
} from "../utils/travel-card-list";
import TravelPassCard from "./travel-pass-card";

export default function TravelCardList(props: TravelCardListPropType) {
  const { listType, travelLists } = props;

  return (
    <StTravelListCard.Section>
      <StTravelListCard.ListTitle>
        {convertCardListNameByCardListType(listType)}
      </StTravelListCard.ListTitle>
      <StTravelListCard.ListBox>
        {travelLists?.map((doc) => {
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
