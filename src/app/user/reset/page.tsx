import ResetForm from "./_components/reset-form";

export default function Reset() {
  return (
    <>
      {/* <SignHeader title="로그인" /> */}
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4">
        <h2 className="font-bold24 text-black">비밀번호를 잊으셨나요?</h2>
        <span className="font-medium12 text-black">
          {`가입하신 이메일 주소를 입력하시면,\n새로운 비밀번호를 입력할 수 있도록 링크를 보내드립니다.`}
        </span>
      </div>
      <ResetForm />
    </>
  );
}
