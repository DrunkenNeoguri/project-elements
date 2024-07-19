"use client";
import Button from "../../../../components/button/button";
import Modal from "../../../../components/modal/modal";
import { TravelBasicType } from "../../../../types/travel.types";
import TravelService from "../../../../services/travel-services";

import useTemplateSection from "../_hooks/use-template-section";

type PropType = {
  handlePrevStep: () => void;
  travelData: TravelBasicType;
};

export default function TemplateSection({
  handlePrevStep,
  travelData,
}: PropType) {
  const {
    modalMsg,
    setModalMsg,
    externalList,
    handleExternalList,
    user,
    router,
  } = useTemplateSection();

  const handleMoveToMakeList = async (useTemplate: boolean) => {
    if (!user?.uid) {
      handleExternalList("travelCreate");
      return setModalMsg(
        `유저 정보를 확인할 수 없습니다.\n재로그인 후, 다시 여행 정보를 생성해주세요.`
      );
    }

    if (
      travelData.id.trim() === "" ||
      travelData.title.trim() === "" ||
      travelData.departureAt.trim() === "" ||
      travelData.destination.trim() === "" ||
      travelData.travelPeriod <= 0 ||
      (travelData.travelType !== "domestic" &&
        travelData.travelType !== "foreign")
    ) {
      handleExternalList("travelCreate");
      return setModalMsg(
        `여행을 등록하기 위한 일부 정보가 누락된 것 같아요.\n되돌아가 입력한 정보들을 재확인해주세요.`
      );
    }

    const createListState = await TravelService.postCreateNewTravel(
      user?.uid,
      useTemplate,
      travelData
    );

    if (createListState === "OK") {
      return router.push(`/element/create?id=${travelData.id}`);
    }
  };

  const handleCloseModal = () => {
    handleExternalList("travelCreate");
    setModalMsg(undefined);
  };

  return (
    <section className="flex flex-col items-start h-full box-border">
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full">
        <h2 className="font-bold24 text-white">{`저희 쪽에서 제공하는\n준비물 템플릿을\n이용하시겠어요?`}</h2>
      </div>
      <figure className="flex justify-center items-start w-full h-full box-border mt-6">
        <img
          className="rounded-2xl max-w-[300px] box-border"
          alt=""
          src="/images/img-template-check.webp"
        />
      </figure>

      <div className="flex flex-col gap-3 mt-auto mb-6 mx-0 w-full box-border">
        <Button
          type="button"
          colorTheme="primaryReverse"
          onClick={() => handleMoveToMakeList(true)}
        >
          이용할게요!
        </Button>
        <Button
          type="button"
          colorTheme="secondaryReverse"
          onClick={() => handleMoveToMakeList(false)}
        >
          직접 만들게요!
        </Button>
        <Button type="button" colorTheme="invalid" onClick={handlePrevStep}>
          돌아가기
        </Button>
      </div>

      <Modal
        isOpen={externalList.includes("travelCreate")}
        setIsOpen={handleCloseModal}
      >
        <Modal.Content
          colorTheme="alert"
          title="여행 정보 등록 불가"
          desc={modalMsg ?? ""}
        />
        <Modal.Icon iconType="alert" />
        <Modal.Button colorTheme="primary" onClick={handleCloseModal}>
          알겠습니다.
        </Modal.Button>
      </Modal>
    </section>
  );
}
