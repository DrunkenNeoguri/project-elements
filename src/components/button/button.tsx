import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonPropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  colorTheme?: ButtoncolorTheme;
  styles?: string;
};

export type ButtoncolorTheme =
  | "primary"
  | "secondary"
  | "invalid"
  | "primaryReverse"
  | "secondaryReverse"
  | "invalidReverse"
  | "white"
  | "black";

export default function Button(props: ButtonPropType) {
  const { children, colorTheme = "primary", styles, ...rest } = props;

  const buttonType = {
    primary: "bg-primary text-white ",
    secondary: "bg-secondary text-white ",
    invalid: "bg-invalid text-white ",
    primaryReverse: "bg-white text-primary ",
    secondaryReverse: "bg-white text-secondary ",
    invalidReverse: "bg-white text-invalid ",
    white: "bg-white text-black ",
    black: "bg-black text-white ",
  };

  return (
    <button
      className={
        "flex justify-center items-center w-full h-11 border-none rounded border-box font-bold16 cursor-pointer " +
        buttonType[colorTheme] +
        styles
      }
      {...rest}
    >
      {children}
    </button>
  );
}
