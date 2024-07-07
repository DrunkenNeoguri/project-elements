import { PropsWithChildren } from "react";

type PropType = PropsWithChildren & {
  animation: "fadeIn" | "fadeOut";
};

export default function ChangeCover(props: PropType) {
  const { children, animation } = props;

  const animationStyle = {
    fadeIn: "opacity-1 animate-fadeIn",
    fadeOut: "opacity-0 animate-fadeOut",
  };

  return (
    <div className={"flex flex-col w-full h-full " + animationStyle[animation]}>
      {children}
    </div>
  );
}
