import Link from "next/link";

export default function LoginHelpBox() {
  return (
    <div className="flex flex-col gap-3 mb-3 w-full justify-center items-center">
      <div className="flex gap-1">
        <span className="font-light10 text-black">회원이 아니신가요?</span>
        <Link
          className="font-light10 text-primary underline"
          href="/users/signup"
        >
          회원가입
        </Link>
      </div>
      <div className="flex gap-1">
        <span className="font-light10 text-black">
          비밀번호를 잊어버리셨나요?
        </span>
        <Link
          className="font-light10 text-primary underline"
          href="/users/find"
        >
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
}
