import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef, useState } from "react";
import { TravelBasicType } from "../../types/travel.types";
import Link from "next/link";

export default function TransportTicket(props: TravelBasicType) {
  const { id, title, departureAt, destination, travelPeriod } = props;

  const divRef = useRef<HTMLDivElement>(null);
  const [qrCode, setQrCode] = useState<QRCodeStyling>();

  // ?CONCERN: 의존성 에러를 줄이면서 깔끔하게 할 수 있는 방법이 뭔지 생각 필요.. useEffectOnce 같은 코드 참고해보자,
  useEffect(() => {
    setQrCode(
      new QRCodeStyling({
        width: 48,
        height: 48,
        data: `/element?id=${id}`,
        image: "https://localhost:3000/icon-domestic.svg",
        dotsOptions: {
          color: "#FFFFFF",
          type: "rounded",
        },
        cornersSquareOptions: {
          type: "extra-rounded",
          color: "#FFFFFF",
        },
        cornersDotOptions: {
          color: "#FFFFFF",
          type: "square",
        },
        backgroundOptions: {
          color: "#008D18",
        },
        imageOptions: {
          crossOrigin: "anonymous",
          imageSize: 0.3,
          margin: 2,
        },
      })
    );
  }, [id]);

  useEffect(() => {
    if (divRef.current) {
      qrCode?.append(divRef.current);
    }
  }, [qrCode, divRef]);

  return (
    <Link
      id={id}
      href={`/element?id=${id}`}
      className="flex max-w-[328px] w-full bg-[#F4F4F4] rounded gap-3 cursor-pointer drop-shadow-[0_4px_4px_#00000064]"
    >
      <div className="bg-secondary text-white flex min-w-[22px] w-[22px] rounded-l items-center justify-center">
        <span className="font-medium text-[8px] leading-[12px] -rotate-90">
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

      <div className="bg-secondary text-white flex flex-col justify-start items-center min-w-[88px] gap-[10px] ml-auto mr-0 my-2 rounded-l p-2">
        <span className="font-medium10 text-left">TICKET</span>
        <div className="w-12 h-12" ref={divRef} />
      </div>
    </Link>
  );
}
