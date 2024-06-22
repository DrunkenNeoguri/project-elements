import SignUpForm from "./_components/sign-up-form";

export default function SignUp() {
  return (
    <>
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4 break-keep">
        <h2 className="font-bold24 text-black">반갑습니다!</h2>
        <span className="font-medium12 text-black">
          아래의 내용을 기입하셔서 회원가입을 진행해주세요.
        </span>
      </div>
      <SignUpForm />
    </>
  );
}
