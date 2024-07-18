"use client";
import Form from "../../../../components/form/form";
import Modal from "../../../../components/modal/modal";
import AuthService from "../../../../services/auth-services";
import useForgetForm from "../_hooks/use-forget-form";
import {
  changeEmailErrorMsg,
  checkForgetDataTypeCheck,
} from "../_utils/forget.utils";

export default function ForgetForm() {
  const {
    forgetData,
    setForgetData,
    modalMsg,
    setModalMsg,
    externalList,
    handleExternalList,
    router,
  } = useForgetForm();

  const handleSubmit = async () => {
    const validityCheck = checkForgetDataTypeCheck(forgetData);

    if (validityCheck) {
      const forgetState = await AuthService.postForgetPasswordProcess(
        forgetData
      );
      if (forgetState === "OK") {
        return router.push("/user/forget/send");
      } else {
        handleExternalList("forget");
        return setModalMsg(forgetState.message);
      }
    }
  };

  const handleCloseModal = () => {
    handleExternalList("login");
    setModalMsg(undefined);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        formData={forgetData}
        setFormData={setForgetData}
        styles="px-4"
      >
        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="email">이메일 주소</Form.Label>
          <Form.Input id="email" type="email" />
          <Form.ErrorText>
            {changeEmailErrorMsg(forgetData.email)}
          </Form.ErrorText>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <Form.Button type="submit">확인 이메일 보내기</Form.Button>

          <Form.Button colorTheme="invalid" type="button">
            돌아가기
          </Form.Button>
        </div>
      </Form>

      <Modal
        isOpen={externalList.includes("forget")}
        setIsOpen={handleCloseModal}
      >
        <Modal.Content
          colorTheme="alert"
          title="로그인 중 에러 발생"
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
