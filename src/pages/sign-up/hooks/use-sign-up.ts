import { useState } from "react";
import { SignUpPageStateType } from "../types/sign-up-form";

export default function useSignUp() {
  const [pageState, setPageState] = useState<SignUpPageStateType>({
    state: "signUp",
    email: null,
  });
  return { pageState, setPageState };
}
