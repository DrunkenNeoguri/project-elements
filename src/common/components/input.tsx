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
    colorTheme,
  } = props;

  return (
    <StInput.Wrapper>
      {isPropHasLabelText(title) && (
        <StInput.Label htmlFor={id} $colorTheme={colorTheme}>
          {title}
        </StInput.Label>
      )}
      <StInput.TextInput
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        $colorTheme={colorTheme}
      />
      {isShowErrorMessage(firstInputCheck, errorCondition) && (
        <StInput.ErrorMessage>{errorMessage}</StInput.ErrorMessage>
      )}
    </StInput.Wrapper>
  );
}
