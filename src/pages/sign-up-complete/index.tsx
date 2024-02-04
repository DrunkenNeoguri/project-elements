import Button from "../../common/components/button";
import Description from "../../common/components/description";
import SignHeader from "../../common/components/sign-header";

export default function SignUpCompletePage() {
  return (
    <>
      <SignHeader title="본인 인증 완료" />
      <div style={{ padding: "0 16px" }}>
        <Description
          title="가입이 완료되었습니다!"
          context="가입해주셔서 감사합니다!"
        />
        <Button text="로그인 화면으로 이동" />
      </div>
    </>
  );
}
