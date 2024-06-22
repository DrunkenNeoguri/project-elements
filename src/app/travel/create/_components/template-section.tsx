"use client";
import { useState } from "react";
import Button from "../../../../components/button/button";
import Modal from "../../../../components/modal/modal";

export default function TemplateSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="flex flex-col items-start h-full box-border">
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4">
        <h2 className="font-bold24 text-white">{`저희 쪽에서 제공하는\n준비물 템플릿을\n이용하시겠어요?`}</h2>
      </div>
      <figure className="flex justify-center items-center w-full h-full box-border">
        <img className="rounded-2xl max-w-[300px] box-border" alt="" />
      </figure>

      <div className="flex flex-col gap-3 mt-auto mb-6 mx-0 w-full box-border">
        <Button type="button" colorTheme="primaryReverse">
          이용할게요!
        </Button>
        <Button type="button" colorTheme="secondaryReverse">
          직접 만들게요!
        </Button>
        <Button type="button" colorTheme="invalid">
          돌아가기
        </Button>
      </div>

      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
        <Modal.Content colorTheme="alert" title="여행 정보 등록 불가" desc="" />
        <Modal.Icon iconType="alert" />
        <Modal.Button colorTheme="confirm" onClick={() => setIsOpen(!isOpen)}>
          알겠습니다.
        </Modal.Button>
      </Modal>
    </section>
  );
}
