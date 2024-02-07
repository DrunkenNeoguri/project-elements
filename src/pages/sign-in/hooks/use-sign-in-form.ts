import { useState } from "react";
import { SignInValueType, SignInViewErrorType } from "../types/sign-in-form";

export default function useSignInForm() {
  const [inputValue, setInputValue] = useState<SignInValueType>({
    email: "",
    password: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<SignInViewErrorType>({
    email: false,
    password: false,
  });

  const changeInputValue = (type: "email" | "password", value: string) => {
    setInputValue({ ...inputValue, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
  };

  const submitSignInData = () => {
    return;
  };

  return { inputValue, changeInputValue, submitSignInData, errorMsgState };
}
