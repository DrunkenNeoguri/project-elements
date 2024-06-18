"use client";

import { useState } from "react";
import Form from "../../../../components/form/form";

export default function LoginForm() {
  // const {
  //   modalState,
  //   formInput,
  //   updateFormInput,
  //   autoSignInState,
  //   toggleAutoSignInState,
  //   postSignInProcess,
  //   errorMsgState,
  // } = useSignInForm();

  const [loginData, setLoginData] = useState<Record<string, string>>({});

  const handleSubmit = () => {};

  return (
    <Form
      onSubmit={handleSubmit}
      formData={loginData}
      setFormData={setLoginData}
    >
      <div>
        <Form.Label htmlFor="email">이메일 주소</Form.Label>
        <Form.Input id="email" type="email" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <div>
        <Form.Label htmlFor="password">비밀번호</Form.Label>
        <Form.Input id="password" type="password" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <Form.Button type="submit">로그인</Form.Button>
    </Form>
  );
}

// <Form.AutoSignInButton
//   type="button"
//   onClick={() => toggleAutoSignInState()}
// >
//   {isClickedAutoSignInButton(autoSignInState) ? (
//     <CheckedIcon />
//   ) : (
//     <UnCheckedIcon />
//   )}
//   <Form.AutoSignInText>자동 로그인</Form.AutoSignInText>
// </Form.AutoSignInButton>
// <Form.ButtonBox>
//   <Button text="로그인" type="submit" />
// </Form.ButtonBox>
// <Form.BottomBox>
// </Form.BottomBox>

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
