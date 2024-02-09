export type ButtonProp = {
  text: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  bgColor?: "primary" | "invalid";
};

export type ButtonColorProp = {
  $bgColor?: "primary" | "invalid";
};
