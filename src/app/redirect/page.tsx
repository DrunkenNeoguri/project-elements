"use client";
import { Bar } from "../../components/loader/loader";
import Modal from "../../components/modal/modal";
import useRedirect from "./_hooks/use-redirect";

export default function Redirect() {
  const { modalMsg, setModalMsg } = useRedirect();

  const handleModalClose = () => {
    setModalMsg(undefined);
    return window.close();
  };

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center relative bg-[#37373780]">
        <Bar />
      </div>
      <Modal
        isOpen={Boolean(modalMsg)}
        setIsOpen={() => setModalMsg(undefined)}
      >
        <Modal.Content
          colorTheme="alert"
          title="본인 확인 중 에러 발생"
          desc={modalMsg ?? ""}
        />
        <Modal.Icon iconType="alert" />
        <Modal.Button colorTheme="primary" onClick={handleModalClose}>
          창 닫기
        </Modal.Button>
      </Modal>
    </>
  );
}
