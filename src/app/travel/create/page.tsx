"use client";
import { useState } from "react";
import Stepper from "./_components/stepper";
import SelectSection from "./_components/select-section";
import TravelForm from "./_components/travel-form";
import ConfirmSection from "./_components/confirm-section";
import TemplateSection from "./_components/template-section";
import { TravelBasicInfoType } from "../../../types/template.types";

export default function Create() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [travelData, setTravelData] = useState<TravelBasicInfoType>({
    id: "",
    travelType: "domestic",
    title: "",
    departureAt: "",
    travelPeriod: 0,
    destination: "",
  });

  const handleMoveNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleMovePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const componentSteps = [
    <SelectSection
      handleNextStep={handleMoveNextStep}
      setTravelData={setTravelData}
    />,
    <TravelForm
      handlePrevStep={handleMovePrevStep}
      handleNextStep={handleMoveNextStep}
      travelData={travelData}
      setTravelData={setTravelData}
    />,
    <ConfirmSection
      handlePrevStep={handleMovePrevStep}
      handleNextStep={handleMoveNextStep}
      travelData={travelData}
      setTravelData={setTravelData}
    />,
    <TemplateSection
      handlePrevStep={handleMovePrevStep}
      travelData={travelData}
    />,
  ];

  return (
    <>
      <Stepper currentStep={currentStep} />
      {componentSteps[currentStep]}
    </>
  );
}

// background-color: ${(props) =>
//   convertBackgroundColorByCompareWithStep(
//     props.$assignStep,
//     props.$currentStep
//   )};
// display: block;

// width: calc((100% - 96px) / 3);
// height: 2px;
