"use client";
import { useRouter } from "next/navigation";
import Button from "../../../../components/button/button";

export default function ResetCompleted() {
  const router = useRouter();

  const handleMoveToLogin = () => {
    return router.push("/user/login");
  };

  return (
    <div className="flex flex-col py-0 box-border">
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4">
        <h2 className="font-bold24 text-black">{`비밀번호 변경이\n완료되었습니다!`}</h2>
        <span className="font-medium12 text-black">
          {`성공적으로 비밀번호가 변경되었습니다!\n\n아래 버튼을 눌러 로그인 페이지로 돌아가신 후,\n이메일 주소와 새로운 비밀번호를 입력해 로그인해주세요!`}
        </span>
      </div>

      <div className="px-4">
        <Button type="button" colorTheme="primary" onClick={handleMoveToLogin}>
          로그인 페이지로 이동
        </Button>
      </div>
    </div>
  );
}
