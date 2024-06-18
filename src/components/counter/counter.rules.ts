import { CounterButtonType } from "./counter.types";

export const isButtonPlacedLeft = (direction: CounterButtonType) => {
  return direction === "left" ? true : false;
};
