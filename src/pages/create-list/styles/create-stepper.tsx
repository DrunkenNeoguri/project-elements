import styled from "styled-components";
import { fontsStyle } from "../../../common/utils/util-fonts";
import { isStepCompleted } from "../policies/create-stepper";
import { StepStatusProp } from "../types/create-stepper";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 20px;

  box-sizing: border-box;
`;

const StepCounter = styled.div<StepStatusProp>`
  background-color: ${(props) =>
    isStepCompleted(props.$assignStep, props.$nowStep)};

  display: flex;
  justify-content: center;
  align-items: center;

  ${fontsStyle.bold.bold12}
  color: #0f4a84;

  height: 24px;
  width: 24px;
  padding-top: 2px;
  border-radius: 50%;
  box-sizing: border-box;
`;

const StepBoundaryLine = styled.div<StepStatusProp>`
  background-color: ${(props) =>
    isStepCompleted(props.$assignStep, props.$nowStep)};
  display: block;

  width: calc((100% - 96px) / 3);
  height: 2px;
`;

export const StCreateStepper = Object.assign(
  {},
  { Wrapper, StepCounter, StepBoundaryLine }
);
