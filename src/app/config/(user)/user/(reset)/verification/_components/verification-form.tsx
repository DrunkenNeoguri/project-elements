"use client";
import { useState } from "react";
import Form from "../../../../../../../components/form/form";

// import Form from "../../../../../components/form/form";
// import {
//   changeConfirmPasswordErrorMsg,
//   changePasswordErrorMsg,
// } from "../_utils/reset.utils";

export default function VerificationForm() {
  const [password, setPassword] = useState<Record<string, string>>({});

  const handleOnSubmit = () => {
    return;
  };

  return (
    <Form
      onSubmit={handleOnSubmit}
      formData={password}
      setFormData={setPassword}
      styles="px-4"
    >
      <div className="flex flex-col mb-3">
        <Form.Label htmlFor="password">현재 비밀번호</Form.Label>
        <Form.Input id="password" type="text" />

        <Form.ErrorText>asdgasdg</Form.ErrorText>
      </div>
    </Form>
  );
}
