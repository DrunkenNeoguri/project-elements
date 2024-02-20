import { isPropHasLabelText, isShowErrorMessage } from "../policies/input";
import { StInput } from "../styles/input";
import { InputProp } from "../types/input";

export default function Input(props: InputProp) {
  const {
    id,
    title,
    value,
    placeholder,
    onChange,
    type,
    errorMessage,
    firstInputCheck,
    errorCondition,
  } = props;

  return (
    <StInput.Wrapper>
      {isPropHasLabelText(title) && (
        <StInput.Label htmlFor={id}>{title}</StInput.Label>
      )}
      <StInput.TextInput
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      {isShowErrorMessage(firstInputCheck, errorCondition) && (
        <StInput.ErrorMessage>{errorMessage}</StInput.ErrorMessage>
      )}
    </StInput.Wrapper>
  );
}
