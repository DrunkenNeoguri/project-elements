import LoginForm from "./_components/login-form";
import LoginHelpBox from "./_components/login-help-box";
import LoginLangBox from "./_components/login-lang-box";

export default function Login() {
  return (
    <>
      {/* <SignHeader title="로그인" /> */}
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4">
        <h2 className="font-bold24 text-black">안녕하세요!</h2>
        <span className="font-medium12 text-black">
          회원이신가요? 아래의 내용을 기입하고 로그인해주세요.
        </span>
      </div>
      <LoginForm />
      <LoginHelpBox />
      <LoginLangBox />
    </>
  );
}
