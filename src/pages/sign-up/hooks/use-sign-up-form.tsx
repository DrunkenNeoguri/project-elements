import { useState } from "react";

type SignUpType = {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
};

export default function useSignUpForm() {
  const initialValue: SignUpType = {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  };
  const [inputValue, setInputValue] = useState<SignUpType>(initialValue);

  const changeInputValue = (type: string, value: string) => {
    setInputValue({ ...inputValue, [type]: value });
  };

  const submitSignUpData = () => {
    return;
  };

  return { inputValue, changeInputValue, submitSignUpData };
}
