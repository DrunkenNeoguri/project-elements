import { StButton } from "../styles/button";
import { ButtonProp } from "../types/button";

export default function Button(props: ButtonProp) {
  const { text, type } = props;
  return <StButton.Wrapper type={type}>{text}</StButton.Wrapper>;
}
