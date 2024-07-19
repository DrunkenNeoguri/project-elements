import Link from "next/link";
import { DomesticIcon, ForeignIcon } from "../../assets/icons/icons";
import { TravelBasicType } from "../../types/travel.types";

export default function Ticket(props: TravelBasicType) {
  const { id, travelType, title, departureAt, travelPeriod, destination } =
    props;

  return (
    <Link
      id={id}
      href={`/element/create?id=${id}`}
      className="bg-white outline-none border-none rounded-md p-0 m-0 w-full box-border overflow-hidden cursor-pointer drop-shadow-[0_4px_4px_#00000064]"
    >
      {travelType === "domestic" ? (
        <div className="w-full h-6 bg-secondary rounded-t-md flex justify-center items-center px-2">
          <DomesticIcon />
          <span className="font-medium10 text-white ml-1 mr-auto">
            JUNBIMUL TRANSPORTATION
          </span>
          <span className="font-medium10 text-white mr-0 ml-auto">TICKET</span>
        </div>
      ) : (
        <div className="w-full h-6 bg-primarySemiLight rounded-t-md flex justify-center items-center px-2">
          <ForeignIcon />
          <span className="font-medium10 text-white ml-1 mr-auto">
            JUNBIMUL AIRLINE
          </span>
          <span className="font-medium10 text-white mr-0 ml-auto">
            BOARDING PASS
          </span>
        </div>
      )}

      <div className="flex p-4 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-[2px] items-start">
            <span className="font-light10 text-black">여행 이름</span>
            <span className="font-medium14 text-black">{title}</span>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col gap-[2px] items-start">
              <span className="font-light10 text-black">출발일자</span>
              <span className="font-medium14 text-black">{departureAt}</span>
            </div>

            <div className="flex flex-col gap-[2px] items-start">
              <span className="font-light10 text-black">여행 기간</span>
              <span className="font-medium14 text-black">{travelPeriod}일</span>
            </div>

            <div className="flex flex-col gap-[2px] items-start">
              <span className="font-light10 text-black">여행지</span>
              <span className="font-medium14 text-black">{destination}</span>
            </div>
          </div>
        </div>

        <img
          src="/images/img-ticket-barcode.webp"
          alt=""
          className="max-w-6 max-h-[84px]"
        />
      </div>
    </Link>
  );
}
