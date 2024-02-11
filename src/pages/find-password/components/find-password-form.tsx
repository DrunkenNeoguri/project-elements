import Input from "../../../common/components/input";
import Description from "../../../common/components/description";
import Button from "../../../common/components/button";
import useFindPasswordForm from "../hooks/use-find-password-form";
import { StFindPasswordForm } from "../styles/find-password-form";
import { emailRegExp } from "../../../common/utils/util-constants";
import {
  isTrueCompareWithValueAndCondition,
  setEmailErrorMsgDependingOnTheCase,
} from "../../../common/policies/input";
import { Dispatch } from "react";
import { SetStateAction } from "jotai";

export default function FindPasswordForm({
  setPageState,
}: {
  setPageState: Dispatch<SetStateAction<string>>;
}) {
  const {
    inputValue,
    changeInputValue,
    submitFindPasswordData,
    errorMsgState,
    goToPreviousScreen,
  } = useFindPasswordForm();
  return (
    <StFindPasswordForm.Form
      onSubmit={(e) => submitFindPasswordData(e, setPageState)}
    >
      <Description
        title="비밀번호를 잊으셨나요?"
        context={`가입하신 이메일 주소를 입력하시면,\n새로운 비밀번호를 입력할 수 있도록 링크를 보내드립니다.`}
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

      <StFindPasswordForm.ButtonBox>
        <Button text="확인 이메일 보내기" type="submit" />
        <Button
          text="돌아가기"
          type="button"
          bgColor="invalid"
          onClick={() => goToPreviousScreen()}
        />
      </StFindPasswordForm.ButtonBox>
    </StFindPasswordForm.Form>
  );
}
