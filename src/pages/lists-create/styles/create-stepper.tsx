import styled from "styled-components";
import { fontsStyle } from "../../../utils/util-fonts";
import { convertBackgroundColorByCompareWithStep } from "../utils/create-stepper";
import { StStepStatusType } from "../types/create-stepper";
import { colors } from "../../../utils/util-color";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 20px;

  box-sizing: border-box;
`;

const StepCounter = styled.div<StStepStatusType>`
  background-color: ${(props) =>
    convertBackgroundColorByCompareWithStep(
      props.$assignStep,
      props.$currentStep
    )};

  display: flex;
  justify-content: center;
  align-items: center;

  ${fontsStyle.bold.bold12}
  color: ${colors.primaryDeep};

  height: 24px;
  width: 24px;
  padding-top: 2px;
  border-radius: 50%;
  box-sizing: border-box;
`;

const StepBoundaryLine = styled.div<StStepStatusType>`
  background-color: ${(props) =>
    convertBackgroundColorByCompareWithStep(
      props.$assignStep,
      props.$currentStep
    )};
  display: block;

  width: calc((100% - 96px) / 3);
  height: 2px;
`;

export const StCreateStepper = Object.assign(
  {},
  { Wrapper, StepCounter, StepBoundaryLine }
);
