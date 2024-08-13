import { useEffect, useState } from "react";
import { TravelBasicType } from "../../../../types/travel.types";

export default function useTravelCreate() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [activeCover, setActiveCover] = useState<"fadeIn" | "fadeOut">(
    "fadeIn"
  );
  const [travelData, setTravelData] = useState<TravelBasicType>({
    id: "",
    travelType: "domestic",
    title: "",
    departureAt: "",
    travelPeriod: 0,
    destination: "",
  });

  useEffect(() => {
    if (activeCover) {
      setTimeout(() => setActiveCover("fadeIn"), 500);
    }
  }, [activeCover, setActiveCover]);

  return {
    currentStep,
    setCurrentStep,
    activeCover,
    setActiveCover,
    travelData,
    setTravelData,
  };
}
