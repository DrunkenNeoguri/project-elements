import { StCreateStepper } from "../styles/create-stepper";
import { useAtom } from "jotai";
import { currentStepAtom } from "../atoms/current-step-atom";

export default function CreateStepper() {
  const [currentStep] = useAtom(currentStepAtom);
  return (
    <StCreateStepper.Wrapper>
      <StCreateStepper.StepCounter $assignStep={0} $currentStep={currentStep}>
        1
      </StCreateStepper.StepCounter>
      <StCreateStepper.StepBoundaryLine
        $assignStep={1}
        $currentStep={currentStep}
      />
      <StCreateStepper.StepCounter $assignStep={1} $currentStep={currentStep}>
        2
      </StCreateStepper.StepCounter>
      <StCreateStepper.StepBoundaryLine
        $assignStep={2}
        $currentStep={currentStep}
      />
      <StCreateStepper.StepCounter $assignStep={2} $currentStep={currentStep}>
        3
      </StCreateStepper.StepCounter>
      <StCreateStepper.StepBoundaryLine
        $assignStep={3}
        $currentStep={currentStep}
      />
      <StCreateStepper.StepCounter $assignStep={3} $currentStep={currentStep}>
        4
      </StCreateStepper.StepCounter>
    </StCreateStepper.Wrapper>
  );
}
