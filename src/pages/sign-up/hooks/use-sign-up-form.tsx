import { useState } from "react";
import { SignUpValueType, SignUpViewErrorType } from "../types/sign-up-form";

export default function useSignUpForm() {
  const [inputValue, setInputValue] = useState<SignUpValueType>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<SignUpViewErrorType>({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const changeInputValue = (
    type: "email" | "password" | "confirmPassword",
    value: string
  ) => {
    setInputValue({ ...inputValue, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
  };

  const submitSignUpData = () => {
    return;
  };

  return { inputValue, changeInputValue, submitSignUpData, errorMsgState };
}
