import { isPropHasLabelText } from "../policies/Input";
import { StInput } from "../styles/Input";
import { InputProp } from "../types/Input";

export default function Input(props: InputProp) {
  const { id, title, value, onChange, type, errorMessage } = props;

  return (
    <StInput.Wrapper>
      {isPropHasLabelText(title) && <StInput.Label>{title}</StInput.Label>}
      <StInput.TextInput
        id={id}
        value={value}
        onChange={onChange}
        type={type}
      />
      <StInput.ErrorMessage>{errorMessage}</StInput.ErrorMessage>
    </StInput.Wrapper>
  );
}
