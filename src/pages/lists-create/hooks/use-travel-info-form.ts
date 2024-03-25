import { FormEvent, useState } from "react";
import { useAtom } from "jotai";
import { TravelInfoType } from "../../../common/types/template";
import { isNotFullInputedInForm } from "../policies/travel-info-form";
import { moveToStepAndActiveDelay1s } from "../utils/index.util";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { moveStepStateAtom } from "../atoms/move-step-state-atom";
import { currentStepAtom } from "../atoms/current-step-atom";

export default function useTravelInfoForm() {
  const [travelInfoData, setTraveInfoData] = useAtom(travelInfoDataAtom);
  const { travelType, title, departureAt, travelPeriod, destination } =
    travelInfoData;
  const [formInput, setFormInput] = useState<TravelInfoType>({
    travelType: travelType,
    title: title,
    departureAt: departureAt,
    travelPeriod: travelPeriod,
    destination: destination,
  });
  const [, setMoveState] = useAtom(moveStepStateAtom);
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);

  const updateTravelInfoData = (e: FormEvent) => {
    e.preventDefault();
    if (isNotFullInputedInForm(formInput)) {
      return;
    } else {
      setMoveState(true);
      return moveToStepAndActiveDelay1s(() => {
        setTraveInfoData({ ...travelInfoData, ...formInput });
        setCurrentStep(currentStep + 1);
      });
    }
  };

  const backToPreviousStep = () => {
    setMoveState(true);
    return moveToStepAndActiveDelay1s(() => {
      setCurrentStep(currentStep - 1);
    });
  };

  const increaseTravelPeriod = (maxCount: number) => {
    const currentCount = formInput.travelPeriod;
    if (currentCount >= maxCount) {
      return;
    }
    return setFormInput({
      ...formInput,
      travelPeriod: currentCount + 1,
    });
  };

  const decreaseTravelPeriod = (minCount: number) => {
    const currentCount = formInput.travelPeriod;
    if (currentCount <= minCount) {
      return;
    }
    return setFormInput({
      ...formInput,
      travelPeriod: currentCount - 1,
    });
  };

  return {
    formInput,
    setFormInput,
    updateTravelInfoData,
    backToPreviousStep,
    increaseTravelPeriod,
    decreaseTravelPeriod,
  };
}
