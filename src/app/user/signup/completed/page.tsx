"use client";
import Button from "../../../../components/button/button";

export default function SignUpVerifySection() {
  return (
    <div className="flex flex-col py-0 box-border">
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4">
        <h2 className="font-bold24 text-black">{`본인 확인을 위해\n이메일을 보내드렸어요!`}</h2>
        <span className="font-medium12 text-black">
          {`서비스를 이용하시려면 본인 인증이 필요합니다.\n\n작성해주신 아래 이메일의 받은 편지함에서 인증 메일을 여셔서, 링크를 눌러 본인 인증을 완료해주세요!\n\n해당 창은 이제 닫으셔도 됩니다.`}
        </span>
      </div>
      <div className="flex flex-col gap-2 box-border mt-[18px] mb-[22px] mx-0 px-4">
        <span className="font-bold12 text-black">작성해주신 이메일 주소</span>

        <span className="font-medium16 text-black underline">email</span>
      </div>

      <div className="px-4">
        <Button
          type="button"
          colorTheme="primary"
          onClick={() => window.close()}
        >
          창 닫기
        </Button>
      </div>
    </div>
  );
}