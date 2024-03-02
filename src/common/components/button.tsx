import { StButton } from "../styles/button";
import { ButtonPropType } from "../types/button";

export default function Button(props: ButtonPropType) {
  const { text, type, colorType, onClick } = props;
  return (
    <StButton.Wrapper type={type} $colorType={colorType} onClick={onClick}>
      {text}
    </StButton.Wrapper>
  );
}
