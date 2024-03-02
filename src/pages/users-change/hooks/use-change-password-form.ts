import { FormEvent, useState } from "react";
import { isInvalidatedChangePasswordInputData } from "../policies/change-password-form";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { useSearchParams } from "react-router-dom";
import { firebaseAuth } from "../../../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import {
  ExposeErrorStateType,
  FormInputType,
} from "../types/change-password-form";

export default function useChangePasswordForm() {
  const [formInput, setFormInput] = useState<FormInputType>({
    password: "",
    confirmPassword: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<ExposeErrorStateType>({
    password: false,
    confirmPassword: false,
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const updateFormInput = (
    type: "password" | "confirmPassword",
    value: string
  ) => {
    setFormInput({ ...formInput, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
    return;
  };

  const updateChangePasswordProcess = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalidatedChangePasswordInputData(formInput)) {
      // @TODO: createPortal 써서 모달 만들어보기
      return false;
    }
    try {
      const auth = firebaseAuth;
      const actionCode = searchParams.get("actionCode");
      if (actionCode === null) {
        throw new Error("The Action Code is invalid.");
      }
      await verifyPasswordResetCode(auth, actionCode);
      await confirmPasswordReset(auth, actionCode, formInput.password);
      await searchParams.set("step", "complete");
      await setSearchParams(searchParams);
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
    }
    return;
  };

  return {
    formInput,
    updateFormInput,
    updateChangePasswordProcess,
    errorMsgState,
  };
}
