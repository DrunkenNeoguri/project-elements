import { useState } from "react";

type FindPasswordType = {
  email: string;
};

export default function useFindPasswordForm() {
  const initialValue: FindPasswordType = {
    email: "",
  };
  const [inputValue, setInputValue] = useState<FindPasswordType>(initialValue);

  const changeInputValue = (type: string, value: string) => {
    setInputValue({ ...inputValue, [type]: value });
  };

  const submitFindPasswordData = () => {
    return;
  };

  return { inputValue, changeInputValue, submitFindPasswordData };
}
