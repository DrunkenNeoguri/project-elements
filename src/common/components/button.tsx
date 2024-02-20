import { StButton } from "../styles/button";
import { ButtonProp } from "../types/button";

export default function Button(props: ButtonProp) {
  const { text, type, colorType, onClick } = props;
  return (
    <StButton.Wrapper type={type} $colorType={colorType} onClick={onClick}>
      {text}
    </StButton.Wrapper>
  );
}
