import { useState } from "react";
import {
  FindPasswordValueType,
  FindPasswordViewErrorType,
} from "../types/find-password-form";

export default function useFindPasswordForm() {
  const [inputValue, setInputValue] = useState<FindPasswordValueType>({
    email: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<FindPasswordViewErrorType>(
    {
      email: false,
    }
  );

  const changeInputValue = (type: "email", value: string) => {
    setInputValue({ ...inputValue, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
  };

  const submitFindPasswordData = () => {
    return;
  };

  return {
    inputValue,
    changeInputValue,
    submitFindPasswordData,
    errorMsgState,
  };
}
