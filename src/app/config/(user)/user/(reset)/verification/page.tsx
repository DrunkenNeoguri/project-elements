import VerificationForm from "./_components/verification-form";

export default function ResetVerification() {
  return (
    <>
      <div className="flex flex-col gap-[10px] box-border w-full px-4 break-keep mb-4">
        <h2 className="font-bold24 text-black">
          현재 비밀번호를 입력해주세요.
        </h2>
        <span className="font-medium12 text-black">
          현재 로그인하신 계정에서 사용 중인 비밀번호를 입력해주세요.
        </span>
      </div>
      <VerificationForm />
    </>
  );
}
