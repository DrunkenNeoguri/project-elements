import { useAtom } from "jotai";
import { moveStepStateAtom } from "../atoms/move-step-state-atom";
import { useEffect } from "react";
import { currentStepAtom } from "../atoms/current-step-atom";
import { moveToStepAndActiveDelay } from "../utils/index.util";

export default function useListsCreate() {
  const [moveState, setMoveState] = useAtom(moveStepStateAtom);
  const [currentStep] = useAtom(currentStepAtom);

  useEffect(() => {
    if (moveState) {
      moveToStepAndActiveDelay(() => setMoveState(false), 500);
    }
  }, [moveState, setMoveState]);

  return { moveState, currentStep };
}
