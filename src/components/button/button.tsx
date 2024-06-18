import { ButtonHTMLAttributes, MouseEvent } from "react";
import { ButtonColorType } from "./button.types";

export type ButtonPropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  colorType?: ButtonColorType;
  onClick: () => void;
};

export default function Button(props: ButtonPropType) {
  const { text, onClick } = props;

  const activeOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      className="bg-primary flex justify-center items-center w-full h-11 border-none rounded border-box font-bold16 text-white cursor-pointer"
      {...props}
      onClick={activeOnClick}
    >
      {text}
    </button>
  );
}
