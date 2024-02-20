export type ButtonColorType =
  | "primary"
  | "secondary"
  | "invalid"
  | "primary-reverse"
  | "secondary-reverse";

export type ButtonProp = {
  text: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  colorType?: ButtonColorType;
};

export type ButtonColorProp = {
  $colorType?: ButtonColorType;
};
