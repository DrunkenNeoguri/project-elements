import { useSearchParams } from "react-router-dom";
import { StCreateStepper } from "../styles/create-stepper";

export default function CreateStepper() {
  const [searchParams] = useSearchParams();
  const step = Number(searchParams.get("step"));
  return (
    <StCreateStepper.Wrapper>
      <StCreateStepper.StepCounter $assignStep={1} $nowStep={step}>
        1
      </StCreateStepper.StepCounter>
      <StCreateStepper.StepBoundaryLine $assignStep={2} $nowStep={step} />
      <StCreateStepper.StepCounter $assignStep={2} $nowStep={step}>
        2
      </StCreateStepper.StepCounter>
      <StCreateStepper.StepBoundaryLine $assignStep={3} $nowStep={step} />
      <StCreateStepper.StepCounter $assignStep={3} $nowStep={step}>
        3
      </StCreateStepper.StepCounter>
      <StCreateStepper.StepBoundaryLine $assignStep={4} $nowStep={step} />
      <StCreateStepper.StepCounter $assignStep={4} $nowStep={step}>
        4
      </StCreateStepper.StepCounter>
    </StCreateStepper.Wrapper>
  );
}
