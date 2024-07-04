"use client";
import Form from "../../../../components/form/form";
import AuthService from "../../../../services/auth-services";
import useResetForm from "../_hooks/use-reset-form";
import { checkResetDataTypeCheck } from "../_utils/reset.utils";

export default function ResetForm() {
  const { resetData, setResetData } = useResetForm();

  const handleSubmit = async () => {
    const validityCheck = checkResetDataTypeCheck(resetData);

    if (validityCheck) {
      const resetState = await AuthService.postResetPasswordProcess(
        "actionCode",
        resetData
      );
      if (resetState === "OK") {
      }
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      formData={resetData}
      setFormData={setResetData}
      styles="px-4"
    >
      <div className="flex flex-col mb-3">
        <Form.Label htmlFor="password">새 비밀번호</Form.Label>
        <Form.Input id="password" type="password" />
        <Form.ErrorText></Form.ErrorText>
      </div>

      <div className="flex flex-col mb-3">
        <Form.Label htmlFor="confirmPassword">새 비밀번호 재확인</Form.Label>
        <Form.Input id="confirmPassword" type="password" />
        <Form.ErrorText></Form.ErrorText>
      </div>

      <Form.Button colorTheme="primary" type="submit">
        새 비밀번호로 변경
      </Form.Button>
    </Form>
  );
}
