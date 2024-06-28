"use client";
import { Dispatch } from "react";
import Form from "../../../../components/form/form";
import { SetStateAction } from "jotai";
import { TravelBasicInfoType } from "../../../../types/template.types";
import Button from "../../../../components/button/button";

type PropType = {
  handlePrevStep: () => void;
  handleNextStep: () => void;
  travelData: TravelBasicInfoType;
  setTravelData: Dispatch<SetStateAction<TravelBasicInfoType>>;
};

export default function TravelForm({
  handlePrevStep,
  handleNextStep,
  travelData,
  setTravelData,
}: PropType) {
  const handleActiveNextButton = () => {
    if (
      travelData.title.trim() !== "" &&
      travelData.departureAt.trim() !== "" &&
      travelData.destination.trim() !== "" &&
      travelData.travelPeriod > 0
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    if (!handleActiveNextButton()) {
      return;
    }
    handleNextStep();
  };

  const handleMoveToSelectStep = () => {
    setTravelData({
      ...travelData,
      title: "",
      departureAt: "",
      travelPeriod: 0,
      destination: "",
    });
    handlePrevStep();
  };

  const handleIncraesePeriod = () => {
    if (travelData.travelPeriod >= 0) {
      setTravelData((prev) => ({
        ...prev,
        travelPeriod: travelData.travelPeriod + 1,
      }));
    }
  };

  const handleDecraesePeriod = () => {
    if (travelData.travelPeriod > 0) {
      setTravelData((prev) => ({
        ...prev,
        travelPeriod: travelData.travelPeriod - 1,
      }));
    }
  };

  return (
    <section className="flex flex-col items-start h-full box-border">
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full">
        <h2 className="font-bold24 text-white">{`여행 일정을 알려주세요!`}</h2>
      </div>
      <Form
        onSubmit={handleSubmit}
        formData={travelData as Record<string, string | number>}
        setFormData={
          setTravelData as Dispatch<
            SetStateAction<Record<string, string | number>>
          >
        }
        styles="h-full gap-6"
      >
        <div>
          <Form.Label colorTheme="white" htmlFor="title">
            여행 제목
          </Form.Label>
          <Form.Input colorTheme="black" id="title" type="text" />
          <Form.ErrorMessage></Form.ErrorMessage>
        </div>

        <div>
          <Form.Label colorTheme="white" htmlFor="departureAt">
            출발 일자
          </Form.Label>
          <Form.Input colorTheme="black" id="departureAt" type="date" />
          <Form.ErrorMessage></Form.ErrorMessage>
        </div>

        <div>
          <Form.Label colorTheme="white" htmlFor="travelPeriod">
            출발 일자
          </Form.Label>
          <Form.Counter
            id="travelPeriod"
            measure="일"
            value={travelData.travelPeriod}
            colorTheme="white"
            increaseFunc={handleIncraesePeriod}
            decreaseFunc={handleDecraesePeriod}
          />
          <Form.ErrorMessage></Form.ErrorMessage>
        </div>

        <div>
          <Form.Label colorTheme="white" htmlFor="destination">
            여행지
          </Form.Label>
          <Form.Input colorTheme="black" id="destination" type="text" />
          <Form.ErrorMessage></Form.ErrorMessage>
        </div>

        <div className="flex flex-col gap-3 mt-auto mb-6 mx-0 w-full box-border">
          <Button
            type="submit"
            colorTheme={handleActiveNextButton() ? "primaryReverse" : "invalid"}
          >
            다음 단계로
          </Button>
          <Button
            type="button"
            colorTheme="invalid"
            onClick={handleMoveToSelectStep}
          >
            돌아가기
          </Button>
        </div>
      </Form>
    </section>
  );
}
