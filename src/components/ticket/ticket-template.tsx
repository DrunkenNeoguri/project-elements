import Link from "next/link";
import { TravelBasicType } from "../../types/travel.types";
import useGetBarcode from "./hooks/use-get-barcode";
import { ReactNode } from "react";

interface TicketTemplateProps {
  type: "domestic" | "foreign";
  backgroundColor: string;
  icon: ReactNode;
  label: string;
  labelStyle: string;
  ticketType: string;
  ticketAlign: string;
}

export function TicketTemplate(
  props: TravelBasicType & { templateConfig: TicketTemplateProps }
) {
  const { id, title, departureAt, destination, travelPeriod, templateConfig } =
    props;
  const {
    backgroundColor,
    type,
    icon,
    label,
    labelStyle,
    ticketAlign,
    ticketType,
  } = templateConfig;

  const { barcodeRef } = useGetBarcode(id, type);

  return (
    <Link
      id={id}
      href={`/element?id=${id}`}
      aria-label={`${title} 준비물 리스트 보러 가기`}
      className="flex min-w-[328px] w-full bg-[#F4F4F4] rounded gap-3 cursor-pointer drop-shadow-[0_4px_4px_#00000064]"
    >
      <div
        className={`${backgroundColor} text-white flex min-w-[22px] w-[22px] whitespace-nowrap rounded-l items-center justify-center`}
      >
        <span className={`font-medium ${labelStyle} -rotate-90`}>{label}</span>
      </div>

      <div className="flex flex-col gap-2 w-full my-2">
        <div className="flex flex-col text-black">
          <span className="font-light10 p-0 m-0">여행 이름</span>
          <span className="font-medium12 p-0 m-0">{title}</span>
        </div>
        <div className="flex flex-col text-black">
          <span className="font-light10 p-0 m-0">여행지</span>
          <span className="font-medium12 p-0 m-0">{destination}</span>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col text-black">
            <span className="font-light10 p-0 m-0">출발일자</span>
            <span className="font-medium12 p-0 m-0">{departureAt}</span>
          </div>
          <div className="flex flex-col text-black">
            <span className="font-light10 p-0 m-0">여행 기간</span>
            <span className="font-medium12 p-0 m-0">{travelPeriod}일</span>
          </div>
        </div>
      </div>

      <div
        className={`${backgroundColor} text-white flex flex-col justify-between items-center min-w-[88px] ml-auto mr-0 my-2 rounded-l p-2`}
      >
        {icon}
        <span className={`font-medium10 ${ticketAlign}`}>{ticketType}</span>
        <svg ref={barcodeRef} />
      </div>
    </Link>
  );
}
