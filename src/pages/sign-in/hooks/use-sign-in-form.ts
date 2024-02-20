import { FormEvent, useState } from "react";
import { SignInValueType, SignInViewErrorType } from "../types/sign-in-form";
import { isInvalidatedSignInInputData } from "../policies/sign-in-form";
import { firebaseAuth } from "../../../common/utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../common/utils/util-convert";
import { signInWithEmailAndPassword } from "firebase/auth";

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

  const submitSignInData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalidatedSignInInputData(inputValue)) {
      // TODO: createPortal 써서 모달 만들어보기
      return false;
    }
    const auth = firebaseAuth;
    try {
      const signInResult = await signInWithEmailAndPassword(
        auth,
        inputValue.email,
        inputValue.password
      );
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
    }
  };

  return { inputValue, changeInputValue, submitSignInData, errorMsgState };
}
