import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import { StSendChangePasswordEmailSection } from "../styles/send-change-password-email-section";

export function SendChangePasswordEmailSection() {
  return (
    <StSendChangePasswordEmailSection.Section>
      <Description
        title={`입력하신 주소로\n이메일을 보내드렸어요!`}
        context={`입력하신 이메일 주소의 받은메일함에서\n비밀번호 변경 관련 이메일이 도착했는지 확인하시고,\n내용 안의 링크를 열어 새로운 비밀번호 변경 작업을\n진행해주시기 바랍니다.\n\n해당 창은 닫으셔도 됩니다.`}
      />
      <Button text="창 닫기" type="button" onClick={() => window.close()} />
    </StSendChangePasswordEmailSection.Section>
  );
}
