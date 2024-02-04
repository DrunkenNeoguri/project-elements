import Input from "../../common/components/Input";
import Button from "../../common/components/button";
import Description from "../../common/components/description";
import SignHeader from "../../common/components/sign-header";

export default function FindPasswordPage() {
  return (
    <>
      <SignHeader title="비밀번호 찾기" />
      <div style={{ padding: "0 16px" }}>
        <Description
          title="비밀번호를 잊으셨나요?"
          context="가입하신 이메일 주소를 입력하시면,\n새로운 비밀번호를 입력할 수 있도록 링크를 보내드립니다."
        />
        <Input
          id="email"
          title="이메일 주소"
          onChange={() => {}}
          value="test"
          type="email"
          errorMessage="text"
        />
        <div style={{ margin: "14px 0" }}>
          <Button text="확인 이메일 보내기" />
          <Button text="돌아가기" />
        </div>
      </div>
    </>
  );
}
