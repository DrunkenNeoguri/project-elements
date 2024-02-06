import Input from "../../../common/components/input";
import Description from "../../../common/components/description";
import Button from "../../../common/components/button";
import useSignUpForm from "../hooks/use-sign-up-form";
import { StSignUpForm } from "../styles/sign-up-form";

export default function SignUpForm() {
  const { inputValue, changeInputValue, submitSignUpData } = useSignUpForm();
  return (
    <StSignUpForm.Form onSubmit={() => submitSignUpData()}>
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
        errorMessage="text"
      />
      <Input
        id="password"
        title="비밀번호"
        onChange={(e) => changeInputValue("password", e.currentTarget.value)}
        value={inputValue.password}
        type="password"
        errorMessage="text"
      />
      <Input
        id="confirmPassword"
        title="비밀번호 재확인"
        onChange={(e) =>
          changeInputValue("confirmPassword", e.currentTarget.value)
        }
        value={inputValue.confirmPassword}
        type="password"
        errorMessage="text"
      />
      <Input
        id="username"
        title="닉네임"
        onChange={(e) => changeInputValue("username", e.currentTarget.value)}
        value={inputValue.username}
        type="text"
        errorMessage="text"
      />
      <StSignUpForm.ButtonBox>
        <Button text="다음 단계로" type="submit" />
        <Button text="돌아가기" type="button" />
      </StSignUpForm.ButtonBox>
    </StSignUpForm.Form>
  );
}
