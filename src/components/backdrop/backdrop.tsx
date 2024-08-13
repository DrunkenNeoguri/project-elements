import { ButtonHTMLAttributes } from "react";

export type BackdropPropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  colorTheme?: "backdrop" | "loader";
  styles?: string;
};

export default function Backdrop(props: BackdropPropType) {
  const { children, colorTheme = "backdrop", styles, ...rest } = props;

  const backdropType = {
    loader: "bg-white ",
    backdrop: "bg-shadowModal animate-[fadeIn_0.25s] ",
  };

  return (
    <button
      className={
        "w-full max-w-[379px] h-[100vh] flex justify-center items-center fixed z-50 top-0 " +
        backdropType[colorTheme] +
        styles
      }
      {...rest}
    >
      {children}
    </button>
  );
}
