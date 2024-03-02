import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import Input from "../../../common/components/input";
import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import {
  convertEmailErrorMessageByValue,
  convertPasswordErrorMessageByValue,
} from "../../../common/utils/input";
import { emailRegExp, passwordRegExp } from "../../../utils/util-constants";
import useSignInForm from "../hooks/use-sign-in-form";
import { StSignInForm } from "../styles/sign-in-form";

export default function SignInForm() {
  const { formInput, updateFormInput, updateSignInProcess, errorMsgState } =
    useSignInForm();
  return (
    <StSignInForm.Form onSubmit={(e) => updateSignInProcess(e)}>
      <Description
        title="안녕하세요!"
        context="회원이신가요? 아래의 내용을 기입하고 로그인해주세요."
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

      <StSignInForm.ButtonBox>
        <Button text="로그인" type="submit" />
      </StSignInForm.ButtonBox>
      <StSignInForm.BottomBox>
        <StSignInForm.TextBox>
          <StSignInForm.Text>회원이 아니신가요?</StSignInForm.Text>
          <StSignInForm.Link href="/signup">회원가입</StSignInForm.Link>
        </StSignInForm.TextBox>
        <StSignInForm.TextBox>
          <StSignInForm.Text>비밀번호를 잊어버리셨나요?</StSignInForm.Text>
          <StSignInForm.Link href="/findpassword?step=inprogress">
            비밀번호 찾기
          </StSignInForm.Link>
        </StSignInForm.TextBox>
        <StSignInForm.LanguageBox>
          <StSignInForm.Text>언어 - </StSignInForm.Text>
          <StSignInForm.LanguageButton>English</StSignInForm.LanguageButton>
          <StSignInForm.Text> | </StSignInForm.Text>
          <StSignInForm.LanguageButton>한국어</StSignInForm.LanguageButton>
          <StSignInForm.Text> | </StSignInForm.Text>
          <StSignInForm.LanguageButton>日本語</StSignInForm.LanguageButton>
        </StSignInForm.LanguageBox>
      </StSignInForm.BottomBox>
    </StSignInForm.Form>
  );
}
