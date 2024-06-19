"use client";
import Form from "../../../../components/form/form";
import useForgetForm from "../_hooks/use-forget-form";

export default function ForgetForm() {
  const { emailData, setEmailData } = useForgetForm();

  const handleSubmit = () => {};

  return (
    <Form
      onSubmit={handleSubmit}
      formData={emailData}
      setFormData={setEmailData}
    >
      <div>
        <Form.Label colorTheme="black" htmlFor="email">
          이메일 주소
        </Form.Label>
        <Form.Input id="email" type="email" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <div className="flex flex-col gap-3">
        <Form.Button colorType="primary" type="submit">
          확인 이메일 보내기
        </Form.Button>

        <Form.Button colorType="invalid" type="button">
          돌아가기
        </Form.Button>
      </div>
    </Form>
  );
}
