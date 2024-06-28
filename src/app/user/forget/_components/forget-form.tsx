"use client";
import Form from "../../../../components/form/form";
import AuthService from "../../../../services/auth-services";
import useForgetForm from "../_hooks/use-forget-form";
import { checkForgetDataTypeCheck } from "../_utils/forget.utils";

export default function ForgetForm() {
  const { forgetData, setForgetData } = useForgetForm();

  const handleSubmit = async () => {
    const validityCheck = checkForgetDataTypeCheck(forgetData);

    if (validityCheck) {
      const forgetState = await AuthService.postForgetPasswordProcess(
        forgetData
      );
      if (forgetState === "OK") {
      }
    }
  };
  return (
    <Form
      onSubmit={handleSubmit}
      formData={forgetData}
      setFormData={setForgetData}
      styles="px-4"
    >
      <div className="flex flex-col mb-3">
        <Form.Label htmlFor="email">이메일 주소</Form.Label>
        <Form.Input id="email" type="email" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <Form.Button type="submit">확인 이메일 보내기</Form.Button>

        <Form.Button colorTheme="invalid" type="button">
          돌아가기
        </Form.Button>
      </div>
    </Form>
  );
}
