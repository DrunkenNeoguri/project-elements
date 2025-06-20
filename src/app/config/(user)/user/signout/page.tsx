"use client";

import { ChangeEvent, useContext, useState } from "react";
import {
  CheckedIcon,
  ModalAlert,
  ModalInfo,
  UnCheckedIcon,
} from "../../../../../assets/icons/icons";
import Button from "../../../../../components/button/button";
import Link from "next/link";
import AuthService from "../../../../../services/auth-services";
import { useRouter } from "next/navigation";
import { ExternalContext } from "../../../../../providers/external-provider";
import Modal from "../../../../../components/modal/modal";

export default function SignOut() {
  const [agreeState, setAgreeState] = useState<boolean>(false);
  const [opinion, setOpinion] = useState<string>();
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const router = useRouter();

  const handleToggleAgreeStateByClick = () => {
    setAgreeState(!agreeState);
  };

  const handleOnChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setOpinion(event.currentTarget.value);
  };

  const handleOnSubmit = async () => {
    if (agreeState) {
      const signOutState = await AuthService.postSignOutProcess(opinion);

      if (signOutState === "OK") {
        return router.push("/user/login");
      } else {
        handleExternalList("signOut");
        setModalMsg(signOutState.message);
      }
    }
  };

  const handleModalClose = () => {
    externalList.delete("signOut");
    setModalMsg(undefined);
  };

  return (
    <>
      <form className="flex flex-col box-border px-4" onSubmit={handleOnSubmit}>
        <div className="flex flex-col w-full break-keep">
          <h2 className="font-bold24 text-black">체크인백을 탈퇴하시겠어요?</h2>
          <div className="flex flex-col pt-6">
            <div className="flex gap-1">
              <ModalInfo width={16} height={16} />
              <span className="text-black font-medium12 mt-[1px]">
                체크인백을 탈퇴하시면, 다음과 같은 정보가 삭제돼요.
              </span>
            </div>
            <ul className="my-4">
              <li className="text-black font-medium12">
                - 개인 정보 및 이용 내역
              </li>
              <li className="text-black font-medium12">
                - 등록한 여행 데이터 (여행 정보, 여행 준비물 리스트)
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-1">
              <ModalAlert width={16} height={16} />
              <span className="text-black font-medium12 mt-[1px]">
                아래의 데이터는 탈퇴를 하셔도 다른 유저를 위해 보존돼요.
              </span>
            </div>
            <ul className="my-4">
              <li className="text-black font-medium12">
                - 템플릿으로 등록한 여행 준비물 리스트
              </li>
            </ul>
          </div>

          <div className="flex gap-1 mt-2 mb-3">
            <button
              type="button"
              className="flex justify-center items-center gap-1 cursor-pointer"
              onClick={handleToggleAgreeStateByClick}
            >
              <div className="p-0 m-0 flex justify-center items-center box-border rounded-lg">
                {agreeState ? (
                  <CheckedIcon width={16} height={16} />
                ) : (
                  <UnCheckedIcon width={16} height={16} />
                )}
              </div>
              <span className="font-bold12 text-black">
                위 내용을 숙지하고, 체크인백을 탈퇴하겠습니다.
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full break-keep">
          <span className="text-black font-medium12 my-3">
            탈퇴하시는 이유 혹은 개선됐으면 하는 점을 알려주시겠어요? 주신
            의견은 더 좋은 체크인백을 만들기 위해 참고하겠습니다.
          </span>
          <textarea
            value={opinion}
            onChange={handleOnChangeTextArea}
            className="bg-invalidLight w-full font-medium16 text-black border rounded m-0 outline-none box-border p-3 mt-1 border-black h-36 resize-none"
            placeholder="탈퇴하시는 이유나 개선됐으면 하는 점을 알려주세요. (선택)"
          />
        </div>
      </form>
      <footer className="bg-white flex p-4 mt-auto mb-0 gap-4 fixed bottom-0 w-full max-w-[379px] z-10">
        <Link
          className="flex justify-center items-center w-full h-11 rounded border-box font-bold16 cursor-pointer bg-white text-invalid"
          href="/config"
        >
          취소
        </Link>
        <Button
          type="submit"
          colorTheme={agreeState ? "primary" : "invalid"}
          onClick={handleOnSubmit}
        >
          탈퇴
        </Button>
      </footer>
      <Modal isOpen={externalList.has("signOut")} setIsOpen={handleModalClose}>
        <Modal.Content
          colorTheme="alert"
          title="회원 탈퇴 중 에러 발생"
          desc={modalMsg ?? ""}
        />
        <Modal.Icon iconType="alert" />
        <Modal.Button
          type="button"
          colorTheme="primary"
          onClick={handleModalClose}
        >
          창 닫기
        </Modal.Button>
      </Modal>
    </>
  );
}
