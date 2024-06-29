export const moveToStepAndActiveDelay = (func: () => void, time: number) => {
  setTimeout(() => {
    func();
  }, time);
};
