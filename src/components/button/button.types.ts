export type ButtonColorType =
  | "primary"
  | "secondary"
  | "invalid"
  | "primary-reverse"
  | "secondary-reverse"
  | "invalid-reverse"
  | "white"
  | "black";

export type ButtonPropType = {
  text: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: () => void;
  colorType?: ButtonColorType;
};

export type StButtonColorType = {
  $colorType?: ButtonColorType;
};
