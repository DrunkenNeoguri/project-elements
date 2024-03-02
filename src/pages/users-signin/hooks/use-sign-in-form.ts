import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import { isInvalidatedSignInFormInput } from "../policies/sign-in-form";
import { ExposeErrorStateType, FormInputType } from "../types/sign-in-form";

export default function useSignInForm() {
  const [formInput, setFormInput] = useState<FormInputType>({
    email: "",
    password: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<ExposeErrorStateType>({
    email: false,
    password: false,
  });

  const updateFormInput = (type: "email" | "password", value: string) => {
    setFormInput({ ...formInput, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
    return;
  };

  const updateSignInProcess = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalidatedSignInFormInput(formInput)) {
      // TODO: createPortal 써서 모달 만들어보기
      return false;
    }
    const auth = firebaseAuth;
    try {
      const signInResult = await signInWithEmailAndPassword(
        auth,
        formInput.email,
        formInput.password
      );
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
    }
  };

  return { formInput, updateFormInput, updateSignInProcess, errorMsgState };
}
