"use client";
import Form from "../../../../components/form/form";
import useSignUpForm from "../_hooks/use-sign-up-form";

export default function SignUpForm() {
  const { signUpData, setSignUpData } = useSignUpForm();

  const handleSubmit = () => {};

  return (
    <Form
      onSubmit={handleSubmit}
      formData={signUpData}
      setFormData={setSignUpData}
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

      <div>
        <Form.Label colorTheme="black" htmlFor="confirmPassword">
          비밀번호 재확인
        </Form.Label>
        <Form.Input id="confirmPassword" type="password" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <div>
        <Form.Label colorTheme="black" htmlFor="username">
          닉네임
        </Form.Label>
        <Form.Input id="username" type="text" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <div className="flex flex-col gap-3">
        <Form.Button colorTheme="primary" type="submit">
          다음 단계로
        </Form.Button>

        <Form.Button colorTheme="invalid" type="button">
          돌아가기
        </Form.Button>
      </div>
    </Form>
  );
}
