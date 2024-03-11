import {
  hasErrorMessage,
  hasLabelTextInProps,
  isShowErrorMessage,
  isShowValidationIcon,
} from "../policies/input";
import { StInput } from "../styles/input";
import { InputPropType } from "../types/input";
import CorrectIcon from "../../assets/icons/svg-input-correct-icon.svg?react";
import IncorrectIcon from "../../assets/icons/svg-input-incorrect-icon.svg?react";

export default function Input(props: InputPropType) {
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
      {hasLabelTextInProps(title) && (
        <StInput.Label htmlFor={id} $colorTheme={colorTheme}>
          {title}
        </StInput.Label>
      )}
      <StInput.TextInputBox>
        <StInput.TextInput
          id={id}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          $colorTheme={colorTheme}
          checkErrorMessage={hasErrorMessage(errorMessage)}
        />
        {isShowValidationIcon({ firstInputCheck, errorMessage }) && (
          <StInput.ValidIcon>
            {isShowErrorMessage({ firstInputCheck, errorCondition }) ? (
              <IncorrectIcon />
            ) : (
              <CorrectIcon />
            )}
          </StInput.ValidIcon>
        )}
      </StInput.TextInputBox>
      {isShowErrorMessage({ firstInputCheck, errorCondition }) && (
        <StInput.ErrorMessage>{errorMessage}</StInput.ErrorMessage>
      )}
    </StInput.Wrapper>
  );
}
