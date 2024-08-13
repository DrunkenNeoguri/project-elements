"use client";
import Form from "../../../../components/form/form";
import AuthService from "../../../../services/auth-services";
import useSignUpForm from "../_hooks/use-sign-up-form";
import {
  changeConfirmPasswordErrorMsg,
  changeEmailErrorMsg,
  changePasswordErrorMsg,
  changeUsernameErrorMsg,
  checkSignUpDataTypeCheck,
} from "../_utils/signup.utils";
import Modal from "../../../../components/modal/modal";

export default function SignUpForm() {
  const {
    signUpData,
    setSignUpData,
    modalMsg,
    setModalMsg,
    externalList,
    handleExternalList,
    router,
  } = useSignUpForm();

  const handleSubmit = async () => {
    const validityCheck = checkSignUpDataTypeCheck(signUpData);

    if (validityCheck) {
      const signUpState = await AuthService.postSignUpProcess(signUpData);
      if (signUpState === "OK") {
        router.push(`/user/signup/completed?email=${signUpData.email}`);
      } else {
        handleExternalList("signup");
        setModalMsg(signUpState.message);
      }
    }
  };

  const handleMoveToLoginPage = () => {
    router.push("/user/login");
  };

  const handleCloseModal = () => {
    handleExternalList("signup");
    setModalMsg(undefined);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        formData={signUpData}
        setFormData={setSignUpData}
        styles="px-4"
      >
        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="email">이메일 주소</Form.Label>
          <Form.Input id="email" type="email" />
          <Form.ErrorText>
            {changeEmailErrorMsg(signUpData.email)}
          </Form.ErrorText>
        </div>

        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="password">비밀번호</Form.Label>
          <Form.Input id="password" type="password" />
          <Form.ErrorText>
            {changePasswordErrorMsg(signUpData.password)}
          </Form.ErrorText>
        </div>

        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="confirmPassword">비밀번호 재확인</Form.Label>
          <Form.Input id="confirmPassword" type="password" />
          <Form.ErrorText>
            {changeConfirmPasswordErrorMsg(
              signUpData.password,
              signUpData.confirmPassword
            )}
          </Form.ErrorText>
        </div>

        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="username">닉네임</Form.Label>
          <Form.Input id="username" type="text" />

          <Form.ErrorText>
            {changeUsernameErrorMsg(signUpData.username)}
          </Form.ErrorText>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <Form.Button
            disabled={!checkSignUpDataTypeCheck(signUpData)}
            colorTheme={
              checkSignUpDataTypeCheck(signUpData)
                ? "primary"
                : "invalidReverse"
            }
            type="submit"
          >
            {checkSignUpDataTypeCheck(signUpData)
              ? "다음 단계로"
              : "내용을 모두 기입해주세요."}
          </Form.Button>

          <Form.Button
            colorTheme="invalid"
            type="button"
            onClick={handleMoveToLoginPage}
          >
            돌아가기
          </Form.Button>
        </div>
      </Form>
      <Modal isOpen={externalList.has("signup")} setIsOpen={handleCloseModal}>
        <Modal.Content
          colorTheme="alert"
          title="회원가입 중 에러 발생"
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
