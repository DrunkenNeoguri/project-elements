import useChangePasswordForm from "../hooks/use-change-password-form";
import { StChangePasswordForm } from "../styles/change-password-form";
import Description from "../../../common/components/description";
import Input from "../../../common/components/input";
import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import { passwordRegExp } from "../../../utils/util-constants";
import Button from "../../../common/components/button";
import {
  convertConfirmPasswordErrorMessageByValues,
  convertPasswordErrorMessageByValue,
} from "../../../common/utils/input";

export default function ChangePasswordForm() {
  const {
    formInput,
    updateFormInput,
    updateChangePasswordProcess,
    errorMsgState,
  } = useChangePasswordForm();
  return (
    <StChangePasswordForm.Form onSubmit={(e) => updateChangePasswordProcess(e)}>
      <Description
        title="새 비밀번호를 입력해주세요."
        context="가입하신 계정에 적용할 새로운 비밀번호를 입력해주세요."
      />
      <Input
        id="password"
        title="비밀번호"
        onChange={(e) => updateFormInput("password", e.currentTarget.value)}
        value={formInput.password}
        type="password"
        errorMessage={convertPasswordErrorMessageByValue(formInput.password)}
        firstInputCheck={errorMsgState.password}
        errorCondition={isTrueCompareWithValueAndCondition(
          formInput.password,
          passwordRegExp
        )}
      />

      <Input
        id="confirmPassword"
        title="비밀번호 재확인"
        onChange={(e) =>
          updateFormInput("confirmPassword", e.currentTarget.value)
        }
        value={formInput.confirmPassword}
        type="password"
        errorMessage={convertConfirmPasswordErrorMessageByValues(
          formInput.confirmPassword,
          formInput.password
        )}
        firstInputCheck={errorMsgState.password}
        errorCondition={isTrueCompareWithValueAndCondition(
          formInput.confirmPassword,
          passwordRegExp,
          formInput.password
        )}
      />
      <Button text="새 비밀번호로 변경" type="submit" />
    </StChangePasswordForm.Form>
  );
}
