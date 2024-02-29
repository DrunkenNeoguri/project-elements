import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  ChangePasswordValueType,
  ChangePasswordViewErrorType,
} from "../types/change-password-form";
import { isInvalidatedChangePasswordInputData } from "../policies/change-password-form";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { useSearchParams } from "react-router-dom";
import { firebaseAuth } from "../../../common/utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../common/utils/util-convert";

export default function useChangePasswordForm() {
  const [inputValue, setInputValue] = useState<ChangePasswordValueType>({
    password: "",
    confirmPassword: "",
  });

  const [errorMsgState, setErrorMsgState] =
    useState<ChangePasswordViewErrorType>({
      password: false,
      confirmPassword: false,
    });

  const [searchParams] = useSearchParams();

  const changeInputValue = (
    type: "password" | "confirmPassword",
    value: string
  ) => {
    setInputValue({ ...inputValue, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
  };

  const submitChangePasswordData = async (
    e: FormEvent<HTMLFormElement>,
    setPageState: Dispatch<SetStateAction<string>>
  ) => {
    e.preventDefault();
    if (isInvalidatedChangePasswordInputData(inputValue)) {
      // TODO: createPortal 써서 모달 만들어보기
      return false;
    }
    const auth = firebaseAuth;
    try {
      const actionCode = await searchParams.get("actionCode");
      if (actionCode === null) {
        throw new Error("The Action Code is invalid.");
      }
      await verifyPasswordResetCode(auth, actionCode);
      await confirmPasswordReset(auth, actionCode, inputValue.password);
      setPageState("complete");
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
    }
    return;
  };

  return {
    inputValue,
    changeInputValue,
    submitChangePasswordData,
    errorMsgState,
  };
}
