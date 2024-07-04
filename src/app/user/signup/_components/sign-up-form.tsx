"use client";
import { useRouter } from "next/navigation";
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

export default function SignUpForm() {
  const { signUpData, setSignUpData } = useSignUpForm();
  const router = useRouter();

  const handleSubmit = async () => {
    const validityCheck = checkSignUpDataTypeCheck(signUpData);

    if (validityCheck) {
      const SignUpState = await AuthService.postSignUpProcess(signUpData);
      if (SignUpState === "OK") {
        router.push(`/user/signup/completed?email=${signUpData.email}`);
      }
    }
  };

  const handleMoveToLoginPage = () => {
    router.push("/user/login");
  };
  return (
    <Form
      onSubmit={handleSubmit}
      formData={signUpData}
      setFormData={setSignUpData}
      styles="px-4"
    >
      <div className="flex flex-col mb-3">
        <Form.Label htmlFor="email">이메일 주소</Form.Label>
        <Form.Input id="email" type="email" />
        <Form.ErrorText>{changeEmailErrorMsg(signUpData.email)}</Form.ErrorText>
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
            signUpData.confirmPassword,
            signUpData.password
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

      <div className="flex flex-col gap-3">
        <Form.Button colorTheme="primary" type="submit">
          다음 단계로
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
  );
}
