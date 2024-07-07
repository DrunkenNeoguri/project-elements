"use client";
import Stepper from "./_components/stepper";
import SelectSection from "./_components/select-section";
import TravelForm from "./_components/travel-form";
import ConfirmSection from "./_components/confirm-section";
import TemplateSection from "./_components/template-section";
import ChangeCover from "./_components/change-cover";
import useTravelCreate from "./_hooks/use-travel-create";

export default function TravelCreate() {
  const {
    currentStep,
    setCurrentStep,
    activeCover,
    setActiveCover,
    travelData,
    setTravelData,
  } = useTravelCreate();

  const handleMoveNextStep = () => {
    setActiveCover("fadeOut");
    setTimeout(() => setCurrentStep(currentStep + 1), 500);
  };

  const handleMovePrevStep = () => {
    setActiveCover("fadeOut");
    setTimeout(() => setCurrentStep(currentStep - 1), 500);
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
      <ChangeCover animation={activeCover}>
        {componentSteps[currentStep]}
      </ChangeCover>
    </>
  );
}
