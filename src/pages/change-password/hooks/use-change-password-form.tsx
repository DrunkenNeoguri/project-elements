import { useState } from "react";
import {
  ChangePasswordValueType,
  ChangePasswordViewErrorType,
} from "../types/change-password-form";

export default function useChangePasswordForm() {
  const [inputValue, setInputValue] = useState<ChangePasswordValueType>({
    password: "",
    confirmPassword: "",
  });

  const [errorMsgState, setErrorMsgState] =
    useState<ChangePasswordViewErrorType>({
      password: false,
      confirmPassword: false,
    });

  const changeInputValue = (
    type: "password" | "confirmPassword",
    value: string
  ) => {
    setInputValue({ ...inputValue, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
  };

  const submitChangePasswordData = () => {
    return;
  };

  return {
    inputValue,
    changeInputValue,
    submitChangePasswordData,
    errorMsgState,
  };
}
