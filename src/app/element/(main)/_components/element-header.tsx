import dayjs from 'dayjs';
import { TravelBasicType } from '../../../../types/travel.types';

export default function ElementHeader({ travelInfo }: { travelInfo: TravelBasicType }) {
  const { title = '', departureAt = '', travelPeriod = 0 } = travelInfo;

  const handleConvertTravelPeriod = () => {
    // ?CONCERN: util로 뺄까...?
    const [departureYear, departureMonth, departureDay] = departureAt.split('-');

    const lastDate = dayjs(departureAt).add(travelPeriod - 1, 'day');

    const [arrivalYear, arrivalMonth, arrivalDay] = [
      lastDate.year(),
      String(lastDate.month() + 1).padStart(2, '0'), // month()는 0부터 시작
      String(lastDate.date()).padStart(2, '0'),
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
