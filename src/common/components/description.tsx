import { StDescription } from "../styles/description";
import { DescriptionProp } from "../types/description";

export default function Description(props: DescriptionProp) {
  const { title, context } = props;

  return (
    <StDescription.Wrapper>
      <StDescription.Title>{title}</StDescription.Title>
      <StDescription.Context>{context}</StDescription.Context>
    </StDescription.Wrapper>
  );
}
