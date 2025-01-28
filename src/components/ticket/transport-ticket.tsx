"use client";
import { TravelBasicType } from "../../types/travel.types";
import Link from "next/link";
import useGetBarcode from "./hooks/use-get-barcode";
import { DomesticIcon } from "../../assets/icons/icons";

export default function TransportTicket(props: TravelBasicType) {
  const { id, title, departureAt, destination, travelPeriod } = props;

  const { barcodeRef } = useGetBarcode(id, "domestic");

  return (
    <Link
      id={id}
      href={`/element?id=${id}`}
      className="flex min-w-[328px] w-full bg-[#F4F4F4] rounded gap-3 cursor-pointer drop-shadow-[0_4px_4px_#00000064]"
    >
      <div className="bg-secondary text-white flex min-w-[22px] w-[22px] whitespace-nowrap rounded-l items-center justify-center">
        <span className="font-medium text-[7px] leading-[11px] -rotate-90">
          CHECKINBAG TRANSPORT
        </span>
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

      <div className="bg-secondary text-white flex flex-col justify-between items-center min-w-[88px] ml-auto mr-0 my-2 rounded-l p-2">
        <DomesticIcon width={22} height={24} />
        <span className="font-medium10 text-left">TICKET</span>
        <svg ref={barcodeRef} />
      </div>
    </Link>
  );
}
