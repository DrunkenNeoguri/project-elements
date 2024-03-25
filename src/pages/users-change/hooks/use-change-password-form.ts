import { FormEvent, useState } from "react";
import { isInvalidatedChangePasswordInputData } from "../policies/change-password-form";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { firebaseAuth } from "../../../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import {
  ExposeErrorStateType,
  FormInputType,
} from "../types/change-password-form";

export default function useChangePasswordForm() {
  const [formInput, setFormInput] = useState<FormInputType>({
    password: "",
    confirmPassword: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<ExposeErrorStateType>({
    password: false,
    confirmPassword: false,
  });
  const [openState, setOpenState] = useState({ state: false, message: "" });
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const moveToFindPasswordPage = () => {
    setOpenState({ state: false, message: "" });
    return navigate("/users/find");
  };

  const updateFormInput = (
    type: "password" | "confirmPassword",
    value: string
  ) => {
    setFormInput({ ...formInput, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
    return;
  };

  const postChangePasswordProcess = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalidatedChangePasswordInputData(formInput)) {
      return setErrorMsgState({ password: true, confirmPassword: true });
    }
    try {
      const auth = firebaseAuth;
      const actionCode = searchParams.get("actionCode");
      if (actionCode === null) {
        return setOpenState({
          state: true,
          message: `유효하지 않은 접근입니다.\n비밀번호 찾기 페이지로 돌아가\n절차를 다시 진행해주세요.`,
        });
      }
      await verifyPasswordResetCode(auth, actionCode);
      await confirmPasswordReset(auth, actionCode, formInput.password);
      searchParams.set("step", "complete");
      return setSearchParams(searchParams);
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
      return setOpenState({ state: true, message: errorMessage });
    }
  };

  return {
    openState,
    moveToFindPasswordPage,
    formInput,
    updateFormInput,
    postChangePasswordProcess,
    errorMsgState,
  };
}
