import { LabelHTMLAttributes, PropsWithChildren } from "react";

type LabelPropType = LabelHTMLAttributes<HTMLLabelElement> &
  PropsWithChildren & {
    colorTheme?: "black" | "white";
    styles?: string;
  };

export default function Label(props: LabelPropType) {
  const { children, colorTheme = "black", styles, ...rest } = props;

  const labelTheme = {
    black: "text-black ",
    white: "text-white ",
  };

  return (
    <label
      className={"font-bold12 mb-1 " + labelTheme[colorTheme] + styles}
      {...rest}
    >
      {children}
    </label>
  );
}
