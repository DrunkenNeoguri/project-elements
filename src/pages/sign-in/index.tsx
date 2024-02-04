import Input from "../../common/components/Input";
import Button from "../../common/components/button";
import Description from "../../common/components/description";
import SignHeader from "../../common/components/sign-header";

export default function SignInPage() {
  return (
    <>
      <SignHeader title="로그인" />
      <div style={{ padding: "0 16px" }}>
        <Description
          title="안녕하세요!"
          context="회원이신가요? 아래의 내용을 기입하고 로그인해주세요."
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
        <div style={{ margin: "14px 0" }}>
          <Button text="로그인" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#373737",
            fontSize: "10px",
            lineHeight: "14px",
            gap: "4px",
          }}
        >
          <span style={{ color: "#373737" }}>회원이 아니신가요?</span>
          <span style={{ color: "#1E90FF", textDecoration: "underline" }}>
            회원가입
          </span>
        </div>
      </div>
    </>
  );
}
