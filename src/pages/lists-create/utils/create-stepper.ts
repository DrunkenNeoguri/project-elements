import { colors } from "../../../utils/util-color";

export const convertBackgroundColorByCompareWithStep = (
  assignStep: number,
  currentStep: number
) => {
  return assignStep <= currentStep ? colors.primaryLight : colors.white;
};
