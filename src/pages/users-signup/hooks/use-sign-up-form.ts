import { FormEvent, useState } from "react";
import { FormInputType, ExposeErrorStateType } from "../types/sign-up-form";
import { isInvalidatedSignUpInputData } from "../policies/sign-up-form";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { firebaseAuth } from "../../../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";

export default function useSignUpForm() {
  const [formInput, setFormInput] = useState<FormInputType>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<ExposeErrorStateType>({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const updateFormInput = (
    type: "email" | "password" | "confirmPassword",
    value: string
  ) => {
    setFormInput({ ...formInput, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
    return;
  };

  const postSignUpProcess = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalidatedSignUpInputData(formInput)) {
      // TODO: createPortal 써서 모달 만들어보기
      return false;
    }
    try {
      const auth = firebaseAuth;
      const createAccountResult = await createUserWithEmailAndPassword(
        auth,
        formInput.email,
        formInput.password
      );
      const userData = await createAccountResult.user;
      if (userData !== null) {
        const userEmail = userData.email;
        await sendEmailVerification(userData);
        // return이 void이기 때문에 별도로 받을 수 있는 값은 없음.
        await searchParams.set("step", "complete");
        await searchParams.set("email", userEmail!);
        await setSearchParams(searchParams);
      }
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
    }
    return;
  };

  const goToPreviousScreen = () => {
    return navigate("/signin");
  };

  return {
    formInput,
    updateFormInput,
    postSignUpProcess,
    errorMsgState,
    goToPreviousScreen,
  };
}
