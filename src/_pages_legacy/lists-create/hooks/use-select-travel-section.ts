import { useAtom } from "jotai";
import { moveStepStateAtom } from "../atoms/move-step-state-atom";
import { useNavigate } from "react-router-dom";
import { TravelCaseType } from "../../../types/template.types";
import { moveToStepAndActiveDelay } from "../utils/index.util";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { currentStepAtom } from "../atoms/current-step-atom";

export default function useSelectTravelSection() {
  const [travelInfoData, setTravelInfoData] = useAtom(travelInfoDataAtom);
  const [, setMoveState] = useAtom(moveStepStateAtom);
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const navigate = useNavigate();

  const updateTravelTypeAndMoveToNextStep = (travelCase: TravelCaseType) => {
    if (travelCase === "domestic") {
      setTravelInfoData({
        ...travelInfoData,
        travelType: "domestic",
        title: "",
        departureAt: "",
        travelPeriod: 1,
        destination: "",
      });
    } else if (travelCase === "foreign") {
      setTravelInfoData({
        ...travelInfoData,
        travelType: "foreign",
        title: "",
        departureAt: "",
        travelPeriod: 1,
        destination: "",
      });
    }

    setMoveState(true);
    return moveToStepAndActiveDelay(() => {
      return setCurrentStep(currentStep + 1);
    }, 500);
  };

  const backToMainPage = () => {
    return navigate("/main");
  };
  return { updateTravelTypeAndMoveToNextStep, backToMainPage };
}
