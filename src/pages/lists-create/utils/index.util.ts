export const moveToStepAndActiveDelay1s = (func: () => void) => {
  setTimeout(() => {
    func();
  }, 1000);
};
