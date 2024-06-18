import Description from "../../../components/text/description";
import LoginForm from "./_components/login-form";
import LoginHelpBox from "./_components/login-help-box";
import LoginLangBox from "./_components/login-lang-box";

export default function Page() {
  return (
    <>
      {/* <SignHeader title="로그인" /> */}
      <Description
        title="안녕하세요!"
        context="회원이신가요? 아래의 내용을 기입하고 로그인해주세요."
      />
      <LoginForm />
      <LoginHelpBox />
      <LoginLangBox />
    </>
  );
}
