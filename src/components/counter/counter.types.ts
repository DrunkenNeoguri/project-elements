export type CounterColorThemeType = "black" | "white";
export type CounterButtonType = "left" | "right";

export type StCounterButtonType = {
  $direction: CounterButtonType;
};

export type StCounterColorThemeType = {
  $colorTheme?: CounterColorThemeType;
};

export type CounterPropType = {
  id: string;
  title: string;
  measure?: string;
  colorTheme?: CounterColorThemeType;
  value: number;
  increaseFunc: () => void;
  decreaseFunc: () => void;
};
