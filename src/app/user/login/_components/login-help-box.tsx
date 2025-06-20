import Link from 'next/link';

export default function LoginHelpBox() {
  return (
    <div className="flex gap-4 my-4 w-full justify-center items-center">
      <div className="flex gap-1 ml-[22px]">
        <Link className="font-light10 text-primary underline" href="/user/signup">
          회원가입
        </Link>
      </div>
      <div className="w-[2px] h-4 bg-invalid rounded-2xl" />
      <div className="flex gap-1">
        <Link className="font-light10 text-primary underline" href="/user/forget">
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
}
