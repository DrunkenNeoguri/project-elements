import { FormEvent, useState } from "react";
import { FormInputType, ExposeErrorStateType } from "../types/sign-up-form";
import { isInvalidatedSignUpInputData } from "../policies/sign-up-form";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { firebaseAuth } from "../../../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";

export default function useSignUpForm() {
  const [formInput, setFormInput] = useState<FormInputType>({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<ExposeErrorStateType>({
    email: false,
    password: false,
    confirmPassword: false,
    username: false,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const updateFormInput = (
    type: "email" | "password" | "confirmPassword" | "username",
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
      if (userData === null) {
        throw new Error("계정 생성에 에러가 발생했습니다.");
      }

      const profileUpdateResult = await updateProfile(userData, {
        displayName: formInput.username,
      });
      if (profileUpdateResult !== undefined) {
        throw new Error("프로필 저장이 되지 않았습니다.");
      }

      const userEmail = userData.email;
      const sendEmailResult = await sendEmailVerification(userData);
      // return이 void이기 때문에 별도로 받을 수 있는 값은 없음.
      await searchParams.set("step", "complete");
      await searchParams.set("email", userEmail!);
      await setSearchParams(searchParams);
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
    }
    return;
  };

  const goToPreviousScreen = () => {
    return navigate("/users/signin");
  };

  return {
    formInput,
    updateFormInput,
    postSignUpProcess,
    errorMsgState,
    goToPreviousScreen,
  };
}
