import { ButtonHTMLAttributes, MouseEvent } from "react";

export type ButtonPropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  colorType: ButtonColorType;
  onClick: () => void;
};

export type ButtonColorType =
  | "primary"
  | "secondary"
  | "invalid"
  | "primaryReverse"
  | "secondaryReverse"
  | "invalidReverse"
  | "white"
  | "black";

export default function Button(props: ButtonPropType) {
  const { text, colorType, onClick } = props;

  const buttonType = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    invalid: "bg-invalid text-white",
    primaryReverse: "bg-white text-primary",
    secondaryReverse: "bg-white text-secondary",
    invalidReverse: "bg-white text-invalid",
    white: "bg-white text-black",
    black: "bg-black text-white",
  };

  const style =
    "flex justify-center items-center w-full h-11 border-none rounded border-box font-bold16 cursor-pointer " +
    buttonType[colorType];

  const activeOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button className={style} {...props} onClick={activeOnClick}>
      {text}
    </button>
  );
}
