import { useSearchParams } from "react-router-dom";
import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import { StSignUpVerifySection } from "../styles/sign-up-verify-section";

export function SignUpVerifySection() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  return (
    <StSignUpVerifySection.Section>
      <Description
        title={`본인 확인을 위해\n이메일을 보내드렸어요!`}
        context={`서비스를 이용하시려면 본인 인증이 필요합니다.\n\n작성해주신 아래 이메일의 받은 편지함에서 인증 메일을 여셔서, 링크를 눌러 본인 인증을 완료해주세요!\n\n해당 창은 이제 닫으셔도 됩니다.`}
      />
      <StSignUpVerifySection.TextBox>
        <StSignUpVerifySection.Text>
          작성해주신 이메일 주소
        </StSignUpVerifySection.Text>
        <StSignUpVerifySection.Email>{email}</StSignUpVerifySection.Email>
      </StSignUpVerifySection.TextBox>
      <Button text="창 닫기" type="button" onClick={() => window.close()} />
    </StSignUpVerifySection.Section>
  );
}
