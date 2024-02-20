import { StDescription } from "../styles/description";
import { DescriptionProp } from "../types/description";

export default function Description(props: DescriptionProp) {
  const { title, context, color } = props;

  return (
    <StDescription.Wrapper>
      <StDescription.Title color={color}>{title}</StDescription.Title>
      <StDescription.Context color={color}>{context}</StDescription.Context>
    </StDescription.Wrapper>
  );
}
