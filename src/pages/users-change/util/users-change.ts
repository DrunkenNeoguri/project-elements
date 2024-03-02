export const convertIndexNumberByStepParams = (step: string | null) => {
  switch (step) {
    case "complete":
      return 1;
    case "inprogress":
    default:
      return 0;
  }
};
