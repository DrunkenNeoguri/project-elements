import { TravelBasicType } from "../../../../types/travel.types";

type ElementHeaderPropsType = Pick<
  TravelBasicType,
  "title" | "departureAt" | "travelPeriod"
>;

export default function ElementHeader(props: ElementHeaderPropsType) {
  const { title = "", departureAt = "", travelPeriod = 0 } = props;

  const handleConvertTravelPeriod = () => {
    // ?CONCERN: util로 뺄까...?
    const [departureYear, departureMonth, departureDay] =
      departureAt.split("-");

    const lastDate = new Date(departureAt);
    lastDate.setDate(lastDate.getDate() + (travelPeriod - 1));

    const [arrivalYear, arrivalMonth, arrivalDay] = [
      lastDate.getFullYear(),
      String(lastDate.getMonth() + 1).padStart(2, "0"),
      String(lastDate.getDate()).padStart(2, "0"),
    ];

    return `${departureYear}. ${departureMonth}. ${departureDay}. ~ ${arrivalYear}. ${arrivalMonth}. ${arrivalDay}. `;
  };

  return (
    <div className="bg-primaryDeep flex flex-col rounded-b-xl w-full px-4 pt-[84px] pb-6 h-40 box-border drop-shadow-[0_4px_4px_#00000064]">
      <div className="flex flex-col box-border w-full break-keep gap-[6px]">
        <p className="font-bold24 text-white">{title}</p>
        <p className="font-medium16 text-white">{`${handleConvertTravelPeriod()} (${travelPeriod}일간)`}</p>
      </div>
    </div>
  );
}
