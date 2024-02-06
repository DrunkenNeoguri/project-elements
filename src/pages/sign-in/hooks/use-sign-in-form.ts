import { useState } from "react";

type SignInType = {
  email: string;
  password: string;
};

export default function useSignInForm() {
  const initialValue: SignInType = { email: "", password: "" };
  const [inputValue, setInputValue] = useState<SignInType>(initialValue);

  const changeInputValue = (type: string, value: string) => {
    setInputValue({ ...inputValue, [type]: value });
  };

  const submitSignInData = () => {
    return;
  };

  return { inputValue, changeInputValue, submitSignInData };
}
