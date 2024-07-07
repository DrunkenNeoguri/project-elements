import { HTMLAttributes, PropsWithChildren } from "react";

type ErrorTextPropType = HTMLAttributes<HTMLSpanElement> &
  PropsWithChildren & {
    styles?: string;
  };

export default function ErrorText(props: ErrorTextPropType) {
  const { children, styles, ...rest } = props;
  return (
    <span className={"font-medium10 text-error mt-[1px] " + styles} {...rest}>
      {children}
    </span>
  );
}
