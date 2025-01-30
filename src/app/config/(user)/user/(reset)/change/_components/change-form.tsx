"use client";

import { useContext, useState } from "react";
import Form from "../../../../../../../components/form/form";
import {
  changePasswordErrorMsg,
  checkPasswordDataTypeCheck,
} from "../../../../../../user/login/_utils/login.utils";
import {
  changeConfirmPasswordErrorMsg,
  checkResetDataTypeCheck,
} from "../../../../../../user/reset/_utils/reset.utils";
import Modal from "../../../../../../../components/modal/modal";
import { ExternalContext } from "../../../../../../../providers/external-provider";
import { useRouter } from "next/navigation";
import AuthService from "../../../../../../../services/auth-services";

export default function ChangeForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const router = useRouter();

  const handleOnSubmit = async () => {
    const validityCheck = checkResetDataTypeCheck(formData);
    if (validityCheck) {
      const changePasswordState = await AuthService.updatePasswordProcess(
        formData.password
      );
      if (changePasswordState === "OK") {
        return router.push("/config");
      } else {
        handleExternalList("changePassword");
        return setModalMsg(changePasswordState.message);
      }
    }
  };

  const handleModalClose = () => {
    externalList.delete("changePassword");
    setModalMsg(undefined);
  };

  return (
    <>
      <Form
        onSubmit={handleOnSubmit}
        formData={formData}
        setFormData={setFormData}
        styles="px-4"
      >
        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="password">새 비밀번호</Form.Label>
          <Form.Input
            id="password"
            type="password"
            minLength={8}
            maxLength={20}
            required
          />
          <Form.ErrorText>
            {changePasswordErrorMsg(formData.password)}
          </Form.ErrorText>
        </div>

        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="confirmPassword">새 비밀번호 재확인</Form.Label>
          <Form.Input
            id="confirmPassword"
            type="password"
            minLength={8}
            maxLength={20}
            required
          />
          <Form.ErrorText>
            {changeConfirmPasswordErrorMsg(
              formData.password,
              formData.confirmPassword
            )}
          </Form.ErrorText>
        </div>
      </Form>
      <footer className="mt-auto mb-0 p-4 fixed bottom-0 max-w-[379px] w-full bg-white">
        <Form.Button
          type="submit"
          onClick={handleOnSubmit}
          colorTheme={
            checkPasswordDataTypeCheck(formData) ? "primary" : "invalidReverse"
          }
        >
          비밀번호 변경
        </Form.Button>
      </footer>
      <Modal
        isOpen={externalList.has("changePassword")}
        setIsOpen={handleModalClose}
      >
        <Modal.Content
          colorTheme="alert"
          title="비밀번호 변경 중 에러 발생"
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
