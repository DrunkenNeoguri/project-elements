import Input from "../../common/components/Input";
import Button from "../../common/components/button";
import Description from "../../common/components/description";
import SignHeader from "../../common/components/sign-header";

export default function ChangePasswordPage() {
  return (
    <>
      <SignHeader title="회원가입" />
      <div style={{ padding: "0 16px" }}>
        <Description
          title="새 비밀번호를 입력해주세요."
          context="가입하신 계정에 적용할 새로운 비밀번호를 입력해주세요."
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
        <Button text="새 비밀번호로 변경" />
      </div>
    </>
  );
}
