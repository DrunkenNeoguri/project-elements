import LoginForm from "./_components/login-form";
import LoginHelpBox from "./_components/login-help-box";
import LoginLangBox from "./_components/login-lang-box";
// import LoginOauthBox from "./_components/login-oauth-box";

// TODO: 로그인 페이지 디자인 바꾸고 배치 등 변경된 사항으로 반영할 것.
export default function Login() {
  return (
    <>
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4 break-keep">
        <h2 className="font-bold24 text-black">안녕하세요!</h2>
        <span className="font-medium12 text-black">
          회원이신가요? 아래의 내용을 기입하고 로그인해주세요.
        </span>
      </div>
      <LoginForm />
      <LoginHelpBox />
      <LoginLangBox />
      {/* <LoginOauthBox /> */}
    </>
  );
}
