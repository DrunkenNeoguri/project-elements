import { ButtonHTMLAttributes, ReactNode } from "react";
import { SelectedIcon, UnselectedIcon } from "../../assets/icons/icons";

export type ButtonPropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  styles?: string;
  isSelected?: boolean;
};

export default function Select(props: ButtonPropType) {
  const { children, isSelected, styles, ...rest } = props;

  return (
    <button
      type="button"
      className={
        "flex justify-between items-center w-full h-11 border-none border-box font-bold16 cursor-pointer bg-white text-primary" +
        styles
      }
      {...rest}
    >
      {children}
      {isSelected ? <SelectedIcon /> : <UnselectedIcon />}
    </button>
  );
}
