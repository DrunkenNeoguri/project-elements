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
  const [openState, setOpenState] = useState({ state: false, message: "" });
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
      return setErrorMsgState({
        email: true,
        password: true,
        confirmPassword: true,
        username: true,
      });
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
        return setOpenState({
          state: true,
          message: `계정 생성이 진행되지 않았습니다.\n잠시 후, 다시 시도해주세요.`,
        });
      }

      const profileUpdateResult = await updateProfile(userData, {
        displayName: formInput.username,
      });

      if (profileUpdateResult !== undefined) {
        return setOpenState({
          state: true,
          message: `문제로 인해 닉네임이 저장되지 않았습니다.\n로그인 후, 닉네임을 변경해주세요.`,
        });
      }

      const userEmail = userData.email;
      await sendEmailVerification(userData);
      searchParams.set("step", "complete");
      searchParams.set("email", userEmail!);
      return setSearchParams(searchParams);
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
      return setOpenState({ state: true, message: errorMessage });
    }
  };

  const goToPreviousScreen = () => {
    return navigate("/users/signin");
  };

  return {
    openState,
    setOpenState,
    formInput,
    updateFormInput,
    postSignUpProcess,
    errorMsgState,
    goToPreviousScreen,
  };
}
