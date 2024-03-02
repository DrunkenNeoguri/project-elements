import { hasContextInDescription } from "../policies/description";
import { StDescription } from "../styles/description";
import { DescriptionPropType } from "../types/description";

export default function Description(props: DescriptionPropType) {
  const { title, context, color } = props;

  return (
    <StDescription.Wrapper>
      <StDescription.Title color={color}>{title}</StDescription.Title>
      {hasContextInDescription(context) && (
        <StDescription.Context color={color}>{context}</StDescription.Context>
      )}
    </StDescription.Wrapper>
  );
}
