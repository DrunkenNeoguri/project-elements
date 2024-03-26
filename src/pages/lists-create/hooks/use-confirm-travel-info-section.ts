import { useAtom } from "jotai";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { moveStepStateAtom } from "../atoms/move-step-state-atom";
import { moveToStepAndActiveDelay } from "../utils/index.util";
import { currentStepAtom } from "../atoms/current-step-atom";

export default function useConfirmTravelInfoSection() {
  const [travelListData] = useAtom(travelInfoDataAtom);
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [, setMoveState] = useAtom(moveStepStateAtom);

  const backToPreviousStep = () => {
    setMoveState(true);
    return moveToStepAndActiveDelay(() => {
      setCurrentStep(currentStep - 1);
    }, 500);
  };

  const moveToNextStep = () => {
    setMoveState(true);
    return moveToStepAndActiveDelay(() => {
      setCurrentStep(currentStep + 1);
    }, 500);
  };

  return { travelListData, moveToNextStep, backToPreviousStep };
}
