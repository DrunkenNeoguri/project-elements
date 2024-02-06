import { useState } from "react";

type ChangePasswordType = {
  password: string;
  confirmPassword: string;
};

export default function useChangePasswordForm() {
  const initialValue: ChangePasswordType = {
    password: "",
    confirmPassword: "",
  };
  const [inputValue, setInputValue] =
    useState<ChangePasswordType>(initialValue);

  const changeInputValue = (type: string, value: string) => {
    setInputValue({ ...inputValue, [type]: value });
  };

  const submitChangePasswordData = () => {
    return;
  };

  return { inputValue, changeInputValue, submitChangePasswordData };
}
