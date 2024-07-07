import ForgetForm from "./_components/forget-form";

export default function Forget() {
  return (
    <>
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4 break-keep">
        <h2 className="font-bold24 text-black">새 비밀번호를 입력해주세요.</h2>
        <span className="font-medium12 text-black">
          가입하신 계정에 적용할 새로운 비밀번호를 입력해주세요.
        </span>
      </div>
      <ForgetForm />
    </>
  );
}
