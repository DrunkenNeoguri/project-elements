import Input from "../../../common/components/input";
import Description from "../../../common/components/description";
import Button from "../../../common/components/button";
import useFindPasswordForm from "../hooks/use-find-password-form";
import { StFindPasswordForm } from "../styles/find-password-form";

export default function FindPasswordForm() {
  const { inputValue, changeInputValue, submitFindPasswordData } =
    useFindPasswordForm();
  return (
    <StFindPasswordForm.Form onSubmit={() => submitFindPasswordData()}>
      <Description
        title="비밀번호를 잊으셨나요?"
        context="가입하신 이메일 주소를 입력하시면,\n새로운 비밀번호를 입력할 수 있도록 링크를 보내드립니다."
      />
      <Input
        id="email"
        title="이메일 주소"
        onChange={(e) => changeInputValue("email", e.currentTarget.value)}
        value={inputValue.email}
        type="email"
        errorMessage="text"
      />
      <StFindPasswordForm.ButtonBox>
        <Button text="확인 이메일 보내기" type="submit" />
        <Button text="돌아가기" type="button" />
      </StFindPasswordForm.ButtonBox>
    </StFindPasswordForm.Form>
  );
}
