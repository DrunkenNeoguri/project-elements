"use client";

import { useContext, useState } from "react";
import Form from "../../../../../../../components/form/form";
import {
  changePasswordErrorMsg,
  checkPasswordDataTypeCheck,
} from "../../../../../../user/login/_utils/login.utils";
import AuthService from "../../../../../../../services/auth-services";
import { ExternalContext } from "../../../../../../../providers/external-provider";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "../../../../../../../components/modal/modal";

export default function VerificationForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleOnSubmit = async () => {
    const validityCheck = checkPasswordDataTypeCheck(formData);

    if (validityCheck) {
      const verifiedState = await AuthService.postUserCheckProcessByLoginUser(
        formData
      );

      if (verifiedState === "OK") {
        const access = searchParams.get("access");
        switch (access) {
          case "change":
            return router.push("/config/user/change");
          case "edit":
            return router.push("/config/user/edit");
          case "signout":
            return router.push("/config/user/signout");
          default:
            return router.push("/config");
        }
      } else {
        handleExternalList("userCheck");
        setModalMsg(verifiedState.message);
      }
    }
  };

  const handleModalClose = () => {
    externalList.delete("userCheck");
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
          <Form.Label htmlFor="password">현재 비밀번호</Form.Label>
          <Form.Input id="password" type="password" />

          <Form.ErrorText>
            {changePasswordErrorMsg(formData.password)}
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
          본인 확인
        </Form.Button>
      </footer>
      <Modal
        isOpen={externalList.has("userCheck")}
        setIsOpen={handleModalClose}
      >
        <Modal.Content
          colorTheme="alert"
          title="본인 확인 중 에러 발생"
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
