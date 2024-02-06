import Input from "../../../common/components/input";
import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import useSignInForm from "../hooks/use-sign-in-form";
import {
  emailRegExp,
  passwordRegExp,
} from "../../../common/utils/utilconstants";
import { StSignInForm } from "../styles/sign-in-form";

export default function SignInForm() {
  const { inputValue, changeInputValue, submitSignInData } = useSignInForm();
  return (
    <StSignInForm.Form onSubmit={() => submitSignInData()}>
      <Description
        title="안녕하세요!"
        context="회원이신가요? 아래의 내용을 기입하고 로그인해주세요."
      />
      <Input
        id="email"
        title="이메일 주소"
        onChange={(e) => changeInputValue("email", e.currentTarget.value)}
        value={inputValue.email}
        type="email"
        errorMessage="이메일 양식에 맞게 작성해주세요."
        regularExpression={emailRegExp}
      />
      <Input
        id="password"
        title="비밀번호"
        onChange={(e) => changeInputValue("password", e.currentTarget.value)}
        value={inputValue.password}
        type="password"
        errorMessage="비밀번호 양식에 맞게 작성해주세요."
        regularExpression={passwordRegExp}
      />
      <StSignInForm.ButtonBox>
        <Button text="로그인" type="submit" />
      </StSignInForm.ButtonBox>
      <StSignInForm.SignUpBox>
        <StSignInForm.Text>회원이 아니신가요?</StSignInForm.Text>
        <StSignInForm.Link href="/signup">회원가입</StSignInForm.Link>
      </StSignInForm.SignUpBox>
    </StSignInForm.Form>
  );
}
