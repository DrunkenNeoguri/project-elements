import Input from "../../common/components/Input";
import Button from "../../common/components/button";
import Description from "../../common/components/description";
import SignHeader from "../../common/components/sign-header";

export default function SignUpPage() {
  return (
    <>
      <SignHeader title="회원가입" />
      <div style={{ padding: "0 16px" }}>
        <Description
          title="반갑습니다!"
          context="아래의 내용을 기입하셔서 회원가입을 진행해주세요."
        />
        <Input
          id="email"
          title="이메일 주소"
          onChange={() => {}}
          value="test"
          type="email"
          errorMessage="text"
        />
        <Input
          id="password"
          title="비밀번호"
          onChange={() => {}}
          value="test"
          type="password"
          errorMessage="text"
        />
        <Input
          id="passwordcheck"
          title="비밀번호 재확인"
          onChange={() => {}}
          value="test"
          type="password"
          errorMessage="text"
        />
        <Input
          id="nickname"
          title="닉네임"
          onChange={() => {}}
          value="test"
          type="text"
          errorMessage="text"
        />
        <div style={{ margin: "14px 0" }}>
          <Button text="다음 단계로" />
          <Button text="돌아가기" />
        </div>
      </div>
    </>
  );
}
