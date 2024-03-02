import useSignUpForm from "../hooks/use-sign-up-form";
import { StSignUpForm } from "../styles/sign-up-form";
import Description from "../../../common/components/description";
import Input from "../../../common/components/input";
import { emailRegExp, passwordRegExp } from "../../../utils/util-constants";
import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import Button from "../../../common/components/button";
import {
  convertConfirmPasswordErrorMessageByValues,
  convertEmailErrorMessageByValue,
  convertPasswordErrorMessageByValue,
} from "../../../common/utils/input";

export default function SignUpForm() {
  const {
    formInput,
    updateFormInput,
    postSignUpProcess,
    errorMsgState,
    goToPreviousScreen,
  } = useSignUpForm();
  return (
    <StSignUpForm.Form onSubmit={(e) => postSignUpProcess(e)}>
      <Description
        title="반갑습니다!"
        context="아래의 내용을 기입하셔서 회원가입을 진행해주세요."
      />
      <Input
        id="email"
        title="이메일 주소"
        onChange={(e) => updateFormInput("email", e.currentTarget.value)}
        value={formInput.email}
        type="email"
        errorMessage={convertEmailErrorMessageByValue(formInput.email)}
        firstInputCheck={errorMsgState.email}
        errorCondition={isTrueCompareWithValueAndCondition(
          formInput.email,
          emailRegExp
        )}
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
      <StSignUpForm.ButtonBox>
        <Button text="다음 단계로" type="submit" />
        <Button
          text="돌아가기"
          type="button"
          colorType="invalid"
          onClick={() => goToPreviousScreen()}
        />
      </StSignUpForm.ButtonBox>
    </StSignUpForm.Form>
  );
}
