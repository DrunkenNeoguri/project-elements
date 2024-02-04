import { StSignHeader } from "../styles/sign-header";
import { SignHeaderProp } from "../types/sign-header";

export default function SignHeader(props: SignHeaderProp) {
  const { title } = props;

  return <StSignHeader.Wrapper>{title}</StSignHeader.Wrapper>;
}
