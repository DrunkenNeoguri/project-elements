"use client";
import Button from "../../../components/button/button";
import Modal from "../../../components/modal/modal";
import useVerified from "./hooks/use-verified";

export default function Verified() {
  const { isOpen, setIsOpen, router } = useVerified();

  const handleMoveToLoginPage = () => {
    return router.push("/user/login");
  };

  const handleSwitchModal = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col py-0 box-border">
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4 break-keep">
        <h2 className="font-bold24 text-black">가입이 완료되었습니다!</h2>
        <span className="font-medium12 text-black">
          {`가입해주셔서 감사합니다!\n\n이제 가입하신 계정으로 로그인한 후,\n여행 준비물을 작성해볼까요?`}
        </span>
      </div>

      <div className="w-full h-full pt-2 pb-6 px-[37px] box-border">
        <img
          className="w-full h-full rounded-2xl box-border"
          alt=""
          src="/images/img-sign-up-complete-section.webp"
        />
      </div>

      <div className="px-4">
        <Button
          colorTheme="primary"
          type="button"
          onClick={handleMoveToLoginPage}
        >
          메인 화면으로 이동
        </Button>
      </div>

      <Modal isOpen={isOpen} setIsOpen={handleSwitchModal}>
        <Modal.Content
          colorTheme="alert"
          title="본인 인증 중 에러 발생"
          desc=""
        />
        <Modal.Icon iconType="alert" />
        <Modal.Button colorTheme="confirm" onClick={handleSwitchModal}>
          로그인 페이지로 돌아가기
        </Modal.Button>
      </Modal>
    </div>
  );
}
