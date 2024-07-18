"use client";
import Form from "../../../../components/form/form";
import Modal from "../../../../components/modal/modal";
import AuthService from "../../../../services/auth-services";
import useResetForm from "../_hooks/use-reset-form";
import {
  changeConfirmPasswordErrorMsg,
  changePasswordErrorMsg,
  checkResetDataTypeCheck,
} from "../_utils/reset.utils";

export default function ResetForm() {
  const {
    resetData,
    setResetData,
    modalMsg,
    setModalMsg,
    router,
    externalList,
    handleExternalList,
  } = useResetForm();

  const handleSubmit = async () => {
    const validityCheck = checkResetDataTypeCheck(resetData);

    if (validityCheck) {
      const resetState = await AuthService.postResetPasswordProcess(
        "actionCode",
        resetData
      );
      if (resetState === "OK") {
        return router.push("/user/reset/completed");
      } else {
        handleExternalList("reset");
        return setModalMsg(resetState.message);
      }
    }
  };

  const handleCloseModal = () => {
    handleExternalList("reset");
    setModalMsg(undefined);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        formData={resetData}
        setFormData={setResetData}
        styles="px-4"
      >
        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="password">새 비밀번호</Form.Label>
          <Form.Input id="password" type="password" />
          <Form.ErrorText>
            {changePasswordErrorMsg(resetData.password)}
          </Form.ErrorText>
        </div>

        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="confirmPassword">새 비밀번호 재확인</Form.Label>
          <Form.Input id="confirmPassword" type="password" />
          <Form.ErrorText>
            {changeConfirmPasswordErrorMsg(
              resetData.password,
              resetData.confirmPassword
            )}
          </Form.ErrorText>
        </div>

        <Form.Button colorTheme="primary" type="submit" styles="mt-3">
          새 비밀번호로 변경
        </Form.Button>
      </Form>

      <Modal
        isOpen={externalList.includes("reset")}
        setIsOpen={handleCloseModal}
      >
        <Modal.Content
          colorTheme="alert"
          title="비밀번호 변경 중 에러 발생"
          desc={modalMsg ?? ""}
        />
        <Modal.Icon iconType="alert" />
        <Modal.Button colorTheme="primary" onClick={handleCloseModal}>
          알겠습니다.
        </Modal.Button>
      </Modal>
    </>
  );
}
