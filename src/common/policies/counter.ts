import { CounterButtonType } from "../types/counter";

export const isButtonPlacedLeft = (direction: CounterButtonType) => {
  return direction === "left" ? true : false;
};
