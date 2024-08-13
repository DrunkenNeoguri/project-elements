"use client";
import { useRouter } from "next/navigation";
import Button from "../../../../components/button/button";
import { Dispatch, SetStateAction } from "react";
import { TravelBasicType } from "../../../../types/travel.types";

type PropType = {
  handleNextStep: () => void;
  setTravelData: Dispatch<SetStateAction<TravelBasicType>>;
};

export default function SelectSection({
  handleNextStep,
  setTravelData,
}: PropType) {
  const router = useRouter();

  const handleMoveToMain = () => {
    return router.push("/main");
  };

  const handleMoveToNextStep = (travelType: "domestic" | "foreign") => {
    setTravelData((prev) => ({ ...prev, travelType }));
    handleNextStep();
  };

  return (
    <section className="flex flex-col items-start h-full box-border">
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full">
        <h2 className="font-bold24 text-white">{`새로운 여행을\n준비하시는군요!\n\n이번엔 어디로 떠니시나요?`}</h2>
      </div>

      <div className="flex flex-col gap-3 w-full mt-auto mx-0 mb-6 box-border">
        <Button
          type="button"
          colorTheme="primaryReverse"
          onClick={() => handleMoveToNextStep("foreign")}
        >
          해외 여행
        </Button>
        <Button
          type="button"
          colorTheme="secondaryReverse"
          onClick={() => handleMoveToNextStep("domestic")}
        >
          국내 여행
        </Button>
        <Button type="button" colorTheme="invalid" onClick={handleMoveToMain}>
          돌아가기
        </Button>
      </div>
    </section>
  );
}
