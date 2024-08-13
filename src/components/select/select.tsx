import { ButtonHTMLAttributes, ReactNode } from "react";
import { SelectedIcon, UnselectedIcon } from "../../assets/icons/icons";

export type ButtonPropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  colorTheme?: "primary" | "secondary" | "warning";
  styles?: string;
  isSelected?: boolean;
};

export default function Select(props: ButtonPropType) {
  const {
    children,
    colorTheme = "primary",
    isSelected,
    styles,
    ...rest
  } = props;

  const selectTheme = {
    primary: "text-primary ",
    secondary: "text-secondary ",
    warning: "text-error ",
  };

  return (
    <button
      type="button"
      className={
        "flex justify-between items-center w-full h-11 border-none border-box font-medium16 cursor-pointer bg-white " +
        selectTheme[colorTheme] +
        (styles ?? "")
      }
      {...rest}
    >
      {children}
      {isSelected ? <SelectedIcon /> : <UnselectedIcon />}
    </button>
  );
}
