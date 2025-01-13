"use client";
import { useState } from "react";
import Form from "../../../../../../../components/form/form";
import { changePasswordErrorMsg } from "../../../../../../user/login/_utils/login.utils";
import { changeConfirmPasswordErrorMsg } from "../../../../../../user/reset/_utils/reset.utils";

// import Form from "../../../../../components/form/form";
// import {
//   changeConfirmPasswordErrorMsg,
//   changePasswordErrorMsg,
// } from "../_utils/reset.utils";

export default function ChangeForm() {
  const [resetData, setResetData] = useState<Record<string, string>>({});

  const handleSubmit = async () => {
    // const validityCheck = checkResetDataTypeCheck(resetData);
    // if (validityCheck) {
    //   const resetState = await AuthService.postResetPasswordProcess(
    //     "actionCode",
    //     resetData
    //   );
    //   if (resetState === "OK") {
    //     return router.push("/user/reset/completed");
    //   } else {
    //     handleExternalList("reset");
    //     return setModalMsg(resetState.message);
    //   }
    // }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        formData={resetData}
        setFormData={setResetData}
        styles="px-4"
      >
        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="password">새 비밀번호</Form.Label>
          <Form.Input id="password" type="password" />
          <Form.ErrorText>
            {changePasswordErrorMsg(resetData.password)}
          </Form.ErrorText>
        </div>

        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="confirmPassword">새 비밀번호 재확인</Form.Label>
          <Form.Input id="confirmPassword" type="password" />
          <Form.ErrorText>
            {changeConfirmPasswordErrorMsg(
              resetData.password,
              resetData.confirmPassword
            )}
          </Form.ErrorText>
        </div>

        <Form.Button colorTheme="primary" type="submit" styles="mt-3">
          새 비밀번호로 변경
        </Form.Button>
      </Form>
    </>
  );
}
