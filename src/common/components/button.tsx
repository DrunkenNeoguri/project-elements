import { MouseEvent } from "react";
import { StButton } from "../styles/button";
import { ButtonPropType } from "../types/button";

export default function Button(props: ButtonPropType) {
  const { text, onClick } = props;

  const activeOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!onClick) {
      return;
    }
    e.stopPropagation();
    onClick();
  };
  return (
    <StButton.Wrapper onClick={(e) => activeOnClick(e)} {...props}>
      {text}
    </StButton.Wrapper>
  );
}

function getText<T>(text: T) {
  return text;
}

getText("aaa");
getText(124);
getText(undefined);
