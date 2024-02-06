import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import { StSignUpCompleteSection } from "../styles/sign-up-complete-section";

export default function SignUpCompleteSection() {
  return (
    <StSignUpCompleteSection.Section>
      <Description
        title="가입이 완료되었습니다!"
        context="가입해주셔서 감사합니다!"
      />
      <Button text="로그인 화면으로 이동" type="button" />
    </StSignUpCompleteSection.Section>
  );
}
