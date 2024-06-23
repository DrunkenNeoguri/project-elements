"use client";
import { CheckedIcon, UnCheckedIcon } from "../../../../assets/icons/icons";
import Form from "../../../../components/form/form";
import Modal from "../../../../components/modal/modal";
import AuthService from "../../../../services/auth-services";
import useLoginForm from "../_hooks/use-login-form";
import {
  changeEmailErrorMsg,
  changePasswordErrorMsg,
  checkLoginDataTypeCheck,
} from "../utils/login.utils";

export default function LoginForm() {
  const { loginData, setLoginData, rememberLogin, setRememberLogin } =
    useLoginForm();

  const handleSubmit = async () => {
    const validityCheck = checkLoginDataTypeCheck(loginData);

    if (validityCheck) {
      const loginState = await AuthService.postLoginProcess(loginData);
      if (loginState === "OK") {
      }
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        formData={loginData}
        setFormData={setLoginData}
      >
        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="email">이메일 주소</Form.Label>
          <Form.Input id="email" type="email" />
          <Form.ErrorMessage>
            {changeEmailErrorMsg(loginData.email)}
          </Form.ErrorMessage>
        </div>

        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="password">비밀번호</Form.Label>
          <Form.Input id="password" type="password" />
          <Form.ErrorMessage>
            {changePasswordErrorMsg(loginData.password)}
          </Form.ErrorMessage>
        </div>

        <button
          type="button"
          className="bg-transparent flex gap-1 border-none outline-none p-0 m-0 mr-auto w-auto cursor-pointer mb-6"
          onClick={() => setRememberLogin(!rememberLogin)}
        >
          {rememberLogin ? <CheckedIcon /> : <UnCheckedIcon />}
          <span className="font-medium10 text-black w-auto">
            로그인 상태 유지
          </span>
        </button>
        <Form.Button colorTheme="primary" type="submit">
          로그인
        </Form.Button>
      </Form>

      <Modal isOpen={rememberLogin} setIsOpen={() => setRememberLogin(false)}>
        <Modal.Content
          colorTheme="alert"
          title="로그인 중 에러 발생"
          desc="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
        />
        <Modal.Icon iconType="alert" />
        <Modal.Button
          colorTheme="confirm"
          onClick={() => setRememberLogin(!rememberLogin)}
        >
          알겠습니다.
        </Modal.Button>
      </Modal>
    </>
  );
}

// {modalState.isOpen && (
//   <Portal
//     children={
//       <Modal
//         title="로그인 중 에러 발생"
//         context={modalState.message}
//         modalType="alert"
//         primary={{
//           text: modalState.buttonText,
//           func: modalState.closeFunc,
//         }}
//       />
//     }
//     container={document.body}
//   />
// )}
