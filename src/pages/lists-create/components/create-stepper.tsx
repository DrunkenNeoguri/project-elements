import { useSearchParams } from "react-router-dom";
import { StCreateStepper } from "../styles/create-stepper";

export default function CreateStepper() {
  const [searchParams] = useSearchParams();
  const currentStep = Number(searchParams.get("step"));
  return (
    <StCreateStepper.Wrapper>
      <StCreateStepper.StepCounter $assignStep={1} $currentStep={currentStep}>
        1
      </StCreateStepper.StepCounter>
      <StCreateStepper.StepBoundaryLine
        $assignStep={2}
        $currentStep={currentStep}
      />
      <StCreateStepper.StepCounter $assignStep={2} $currentStep={currentStep}>
        2
      </StCreateStepper.StepCounter>
      <StCreateStepper.StepBoundaryLine
        $assignStep={3}
        $currentStep={currentStep}
      />
      <StCreateStepper.StepCounter $assignStep={3} $currentStep={currentStep}>
        3
      </StCreateStepper.StepCounter>
      <StCreateStepper.StepBoundaryLine
        $assignStep={4}
        $currentStep={currentStep}
      />
      <StCreateStepper.StepCounter $assignStep={4} $currentStep={currentStep}>
        4
      </StCreateStepper.StepCounter>
    </StCreateStepper.Wrapper>
  );
}
