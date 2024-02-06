import {
  isPropHasLabelText,
  isTrueCompareWithValueAndRegExp,
} from "../policies/input";
import { StInput } from "../styles/input";
import { InputProp } from "../types/input";

export default function Input(props: InputProp) {
  const { id, title, value, onChange, type, errorMessage, regularExpression } =
    props;

  console.log(
    id,
    "체크",
    isTrueCompareWithValueAndRegExp(value, regularExpression)
  );
  return (
    <StInput.Wrapper>
      {isPropHasLabelText(title) && <StInput.Label>{title}</StInput.Label>}
      <StInput.TextInput
        id={id}
        value={value}
        onChange={onChange}
        type={type}
      />
      {isTrueCompareWithValueAndRegExp(value, regularExpression) && (
        <StInput.ErrorMessage>{errorMessage}</StInput.ErrorMessage>
      )}
    </StInput.Wrapper>
  );
}
