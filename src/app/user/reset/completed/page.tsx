import Link from "next/link";

export default function ResetCompleted() {
  return (
    <>
      <div className="flex flex-col gap-[10px] box-border mt-6 my-6 w-full px-4 break-keep">
        <h2 className="font-bold24 text-black">{`비밀번호 변경이\n완료되었습니다!`}</h2>
        <span className="font-medium12 text-black">
          {`성공적으로 비밀번호가 변경되었습니다!\n\n아래 버튼을 눌러 로그인 페이지로 돌아가신 후,\n이메일 주소와 새로운 비밀번호를 입력해 로그인해주세요!`}
        </span>
      </div>

      <div className="w-full px-4">
        <Link
          className="flex justify-center items-center w-full h-11 border-none rounded border-box font-bold16 cursor-pointer bg-primary text-white"
          href="/user/login"
        >
          로그인 페이지로 이동
        </Link>
      </div>
    </>
  );
}
