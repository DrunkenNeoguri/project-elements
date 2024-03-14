import { FormEvent, useState } from "react";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../../../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import { isInvalidatedSignInFormInput } from "../policies/sign-in-form";
import { ExposeErrorStateType, FormInputType } from "../types/sign-in-form";
import { useNavigate } from "react-router-dom";

export default function useSignInForm() {
  const [formInput, setFormInput] = useState<FormInputType>({
    email: "",
    password: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<ExposeErrorStateType>({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const updateFormInput = (type: "email" | "password", value: string) => {
    setFormInput({ ...formInput, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
    return;
  };

  const postSignInProcess = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalidatedSignInFormInput(formInput)) {
      // TODO: createPortal 써서 모달 만들어보기
      return false;
    }

    try {
      const auth = firebaseAuth;
      // 지속성 - 자동 로그인하면 로컬 저장, 아니면 none
      // setPersistence(auth, browserLocalPersistence)
      const signInResult = await signInWithEmailAndPassword(
        auth,
        formInput.email,
        formInput.password
      );
      if (signInResult !== undefined) {
        navigate("/main");
      }
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
    }
  };

  return { formInput, updateFormInput, postSignInProcess, errorMsgState };
}
