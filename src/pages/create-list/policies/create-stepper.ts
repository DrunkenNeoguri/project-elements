export const isStepCompleted = (assignStep: number, nowStep: number) => {
  return assignStep <= nowStep ? "#A6CAFF" : "#FFFFFF";
};
