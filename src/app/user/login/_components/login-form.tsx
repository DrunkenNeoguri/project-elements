"use client";

import { CheckedIcon, UnCheckedIcon } from "../../../../assets/icons/icons";
import Form from "../../../../components/form/form";
import Modal from "../../../../components/modal/modal";
import useLoginForm from "../_hooks/use-login-form";

export default function LoginForm() {
  const { loginData, setLoginData, rememberLogin, setRememberLogin } =
    useLoginForm();

  const handleSubmit = () => {};

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        formData={loginData}
        setFormData={setLoginData}
      >
        <div>
          <Form.Label colorTheme="black" htmlFor="email">
            이메일 주소
          </Form.Label>
          <Form.Input id="email" type="email" />
          <Form.ErrorMessage></Form.ErrorMessage>
        </div>

        <div>
          <Form.Label colorTheme="black" htmlFor="password">
            비밀번호
          </Form.Label>
          <Form.Input id="password" type="password" />
          <Form.ErrorMessage></Form.ErrorMessage>
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
        <Form.Button colorType="primary" type="submit">
          로그인
        </Form.Button>
      </Form>

      <Modal isOpen={rememberLogin} setIsOpen={() => setRememberLogin(false)}>
        <Modal.Content
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
