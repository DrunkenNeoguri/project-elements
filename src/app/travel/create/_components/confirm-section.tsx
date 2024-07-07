"use client";
import { Dispatch, SetStateAction, useContext } from "react";
import Button from "../../../../components/button/button";
import { TravelBasicInfoType } from "../../../../types/travel.types";
import { AuthContext } from "../../../../providers/auth-provider";

type PropType = {
  handlePrevStep: () => void;
  handleNextStep: () => void;
  travelData: TravelBasicInfoType;
  setTravelData: Dispatch<SetStateAction<TravelBasicInfoType>>;
};

export default function ConfirmSection({
  handlePrevStep,
  handleNextStep,
  travelData,
  setTravelData,
}: PropType) {
  const user = useContext(AuthContext);
  const handleChangeHeaderColor = () => {
    return travelData?.travelType === "domestic"
      ? "bg-secondary text-white"
      : "bg-primaryLight text-black";
  };

  const handleMoveToNextStep = () => {
    if (!user) {
      return;
    }
    setTravelData({ ...travelData, id: user.uid + Date.now() });
    handleNextStep();
  };

  const handleMoveToPrevStep = () => {
    setTravelData({ ...travelData, id: "" });
    handlePrevStep();
  };

  return (
    <section className="flex flex-col items-start h-full box-border">
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full">
        <h2 className="font-bold24 text-white">{`입력하신 정보가\n맞는지 확인해주세요!`}</h2>
      </div>

      <div className="mt-9 flex w-full justify-center">
        <div className="flex flex-col rounded-r-2xl bg-white overflow-hidden w-60">
          <div
            className={
              "font-medium16 flex items-center h-10 px-4 pt-1 pb-0 box-border " +
              handleChangeHeaderColor()
            }
          >
            <span>TICKET</span>
          </div>

          <div className="flex justify-between text-left px-4 pt-6 pb-9">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-light10 text-black">여행 이름</span>
                <span className="font-medium14 text-black">
                  {travelData.title}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-light10 text-black">출발 일자</span>
                <span className="font-medium14 text-black">
                  {travelData.departureAt}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-light10 text-black">여행 기간</span>
                <span className="font-medium14 text-black">
                  {travelData.travelPeriod}일
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-light10 text-black">여행지</span>
                <span className="font-medium14 text-black">
                  {travelData.destination}
                </span>
              </div>
            </div>

            <div className="flex pb-0 pl-auto">
              <img
                src="/images/img-ticket-barcode.webp"
                alt=""
                className="w-[44px] h-[192px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-auto mb-6 mx-0 w-full box-border">
        <Button
          type="button"
          colorTheme="primaryReverse"
          onClick={handleMoveToNextStep}
        >
          네, 맞아요!
        </Button>
        <Button
          type="button"
          colorTheme="invalid"
          onClick={handleMoveToPrevStep}
        >
          아니에요.
        </Button>
      </div>
    </section>
  );
}
