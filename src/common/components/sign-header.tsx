import { StSignHeader } from "../styles/sign-header";
import { SignHeaderPropType } from "../types/sign-header";

export default function SignHeader(props: SignHeaderPropType) {
  const { title } = props;

  return <StSignHeader.Wrapper>{title}</StSignHeader.Wrapper>;
}
