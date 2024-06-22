"use client";
import Form from "../../../../components/form/form";
import useResetForm from "../_hooks/use-reset-form";

export default function ResetForm() {
  const { pwData, setPwData } = useResetForm();

  const handleSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit} formData={pwData} setFormData={setPwData}>
      <div>
        <Form.Label htmlFor="password">새 비밀번호</Form.Label>
        <Form.Input id="password" type="password" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <div>
        <Form.Label htmlFor="confirmPassword">새 비밀번호 재확인</Form.Label>
        <Form.Input id="confirmPassword" type="password" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <Form.Button colorTheme="primary" type="submit">
        새 비밀번호로 변경
      </Form.Button>
    </Form>
  );
}
