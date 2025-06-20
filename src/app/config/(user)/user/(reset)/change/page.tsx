import ChangeForm from './_components/change-form';

export default function ResetChange() {
  return (
    <>
      <div className="flex flex-col gap-[10px] box-border w-full px-4 break-keep mb-4">
        <h2 className="font-bold24 text-black">새 비밀번호를 입력해주세요.</h2>
        <span className="font-medium12 text-black">
          가입하신 계정에 적용할 새로운 비밀번호를 입력해주세요.
        </span>
      </div>
      <ChangeForm />
    </>
  );
}
