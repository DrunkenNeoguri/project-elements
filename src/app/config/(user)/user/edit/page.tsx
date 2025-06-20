"use client";
import { useContext, useState } from "react";
import Form from "../../../../../components/form/form";
import { ExternalContext } from "../../../../../providers/external-provider";
import { useRouter } from "next/navigation";
import { changeUsernameErrorMsg } from "../../../../user/signup/_utils/signup.utils";
import AuthService from "../../../../../services/auth-services";
import Modal from "../../../../../components/modal/modal";
import { checkUsernameDataTypeCheck } from "../../../../user/login/_utils/login.utils";

export default function Edit() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const router = useRouter();

  const handleOnSubmit = async () => {
    const validityCheck = checkUsernameDataTypeCheck(formData);

    if (validityCheck) {
      const updateProfileState = await AuthService.updateProfileProcess(
        formData.username
      );

      if (updateProfileState === "OK") {
        return router.push("/config");
      } else {
        handleExternalList("editProfile");
        setModalMsg(updateProfileState.message);
      }
    }
  };

  const handleModalClose = () => {
    externalList.delete("editProfile");
    setModalMsg(undefined);
  };

  return (
    <>
      <div className="flex flex-col gap-[10px] box-border w-full px-4 break-keep mb-4">
        <h2 className="font-bold24 text-black">프로필을 수정하실건가요?</h2>
        <span className="font-medium12 text-black">
          변경하고 싶은 사항이 있으시다면 내용을 수정 후 저장 버튼을 눌러주세요.
        </span>
      </div>
      <Form
        onSubmit={handleOnSubmit}
        formData={formData}
        setFormData={setFormData}
        styles="px-4"
      >
        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="username">닉네임</Form.Label>
          <Form.Input id="username" type="text" />

          <Form.ErrorText>
            {changeUsernameErrorMsg(formData.username)}
          </Form.ErrorText>
        </div>
      </Form>
      <footer className="mt-auto mb-0 p-4 fixed bottom-0 max-w-[379px] w-full bg-white">
        <Form.Button
          type="submit"
          colorTheme={
            checkUsernameDataTypeCheck(formData) ? "primary" : "invalidReverse"
          }
        >
          내 정보 저장
        </Form.Button>
      </footer>
      <Modal
        isOpen={externalList.has("editProfile")}
        setIsOpen={handleModalClose}
      >
        <Modal.Content
          colorTheme="alert"
          title="프로필 수정 중 에러 발생"
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
