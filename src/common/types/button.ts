export type ButtonColorType =
  | "primary"
  | "secondary"
  | "invalid"
  | "primary-reverse"
  | "secondary-reverse"
  | "white"
  | "black";

export type ButtonPropType = {
  text: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  colorType?: ButtonColorType;
};

export type StButtonColorType = {
  $colorType?: ButtonColorType;
};
