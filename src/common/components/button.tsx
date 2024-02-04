import { StButton } from "../styles/button";
import { ButtonProp } from "../types/button";

export default function Button(props: ButtonProp) {
  const { text } = props;
  return <StButton.Wrapper>{text}</StButton.Wrapper>;
}
