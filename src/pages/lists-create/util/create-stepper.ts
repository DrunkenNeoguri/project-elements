export const convertBackgroundColorByCompareWithStep = (
  assignStep: number,
  currentStep: number
) => {
  return assignStep <= currentStep ? "#A6CAFF" : "#FFFFFF";
};
