import Input from "../../../common/components/input";
import Description from "../../../common/components/description";
import Button from "../../../common/components/button";
import useSignUpForm from "../hooks/use-sign-up-form";
import { StSignUpForm } from "../styles/sign-up-form";
import {
  emailRegExp,
  passwordRegExp,
} from "../../../common/utils/util-constants";
import {
  isTrueCompareWithValueAndCondition,
  setConfirmPasswordErrorMsgDependingOnTheCase,
  setEmailErrorMsgDependingOnTheCase,
  setPasswordErrorMsgDependingOnTheCase,
} from "../../../common/policies/input";
import { Dispatch, SetStateAction } from "react";
import { SignUpPageStateType } from "../types/sign-up-form";

export default function SignUpForm({
  setPageState,
}: {
  setPageState: Dispatch<SetStateAction<SignUpPageStateType>>;
}) {
  const {
    inputValue,
    changeInputValue,
    submitSignUpData,
    errorMsgState,
    goToPreviousScreen,
  } = useSignUpForm();
  return (
    <StSignUpForm.Form onSubmit={(e) => submitSignUpData(e, setPageState)}>
      <Description
        title="반갑습니다!"
        context="아래의 내용을 기입하셔서 회원가입을 진행해주세요."
      />
      <Input
        id="email"
        title="이메일 주소"
        onChange={(e) => changeInputValue("email", e.currentTarget.value)}
        value={inputValue.email}
        type="email"
        errorMessage={setEmailErrorMsgDependingOnTheCase(inputValue.email)}
        firstInputCheck={errorMsgState.email}
        errorCondition={isTrueCompareWithValueAndCondition(
          inputValue.email,
          emailRegExp
        )}
      />

      <Input
        id="password"
        title="비밀번호"
        onChange={(e) => changeInputValue("password", e.currentTarget.value)}
        value={inputValue.password}
        type="password"
        errorMessage={setPasswordErrorMsgDependingOnTheCase(
          inputValue.password
        )}
        firstInputCheck={errorMsgState.password}
        errorCondition={isTrueCompareWithValueAndCondition(
          inputValue.password,
          passwordRegExp
        )}
      />

      <Input
        id="confirmPassword"
        title="비밀번호 재확인"
        onChange={(e) =>
          changeInputValue("confirmPassword", e.currentTarget.value)
        }
        value={inputValue.confirmPassword}
        type="password"
        errorMessage={setConfirmPasswordErrorMsgDependingOnTheCase(
          inputValue.confirmPassword,
          inputValue.password
        )}
        firstInputCheck={errorMsgState.password}
        errorCondition={isTrueCompareWithValueAndCondition(
          inputValue.confirmPassword,
          passwordRegExp,
          inputValue.password
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