import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import useCompleteChangePasswordSection from "../hooks/use-complete-change-password-section";
import { StCompleteChangePasswordSection } from "../styles/complete-change-password-section";

export function CompleteChangePasswordSection() {
  const { moveToSignInPage } = useCompleteChangePasswordSection();
  return (
    <StCompleteChangePasswordSection.Section>
      <Description
        title={`비밀번호 변경이\n완료되었습니다!`}
        context={`성공적으로 비밀번호가 변경되었습니다!\n\n아래 버튼을 눌러 로그인 페이지로 돌아가신 후,\n이메일 주소와 새로운 비밀번호를 입력해 로그인해주세요!`}
      />
      <Button
        text="로그인 화면으로 이동"
        type="button"
        onClick={() => moveToSignInPage()}
      />
    </StCompleteChangePasswordSection.Section>
  );
}
