import { StButton } from "../styles/button";
import { ButtonProp } from "../types/button";

export default function Button(props: ButtonProp) {
  const { text, type, bgColor, onClick } = props;
  return (
    <StButton.Wrapper type={type} bgColor={bgColor} onClick={onClick}>
      {text}
    </StButton.Wrapper>
  );
}
