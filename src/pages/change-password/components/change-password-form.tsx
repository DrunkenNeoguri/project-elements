import Input from "../../../common/components/input";
import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import useChangePasswordForm from "../hooks/use-change-password-form";
import { StChangePasswordForm } from "../styles/change-password-form";

export default function ChangePasswordForm() {
  const { inputValue, changeInputValue, submitChangePasswordData } =
    useChangePasswordForm();
  return (
    <StChangePasswordForm.Form onSubmit={() => submitChangePasswordData()}>
      <Description
        title="새 비밀번호를 입력해주세요."
        context="가입하신 계정에 적용할 새로운 비밀번호를 입력해주세요."
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
      <Button text="새 비밀번호로 변경" type="submit" />
    </StChangePasswordForm.Form>
  );
}
