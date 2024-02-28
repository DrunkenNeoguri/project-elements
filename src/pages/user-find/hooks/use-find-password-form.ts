import { Dispatch, FormEvent, useState } from "react";
import {
  FindPasswordValueType,
  FindPasswordViewErrorType,
} from "../types/find-password-form";
import { SetStateAction } from "jotai";
import { isInvalidatedFindPasswordInputData } from "../policies/find-password-form";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../../common/utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../common/utils/util-convert";

export default function useFindPasswordForm() {
  const [inputValue, setInputValue] = useState<FindPasswordValueType>({
    email: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<FindPasswordViewErrorType>(
    {
      email: false,
    }
  );
  const navigate = useNavigate();

  const changeInputValue = (type: "email", value: string) => {
    setInputValue({ ...inputValue, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
  };

  const submitFindPasswordData = async (
    e: FormEvent<HTMLFormElement>,
    setPageState: Dispatch<SetStateAction<string>>
  ) => {
    e.preventDefault();
    if (isInvalidatedFindPasswordInputData(inputValue)) {
      // TODO: createPortal 써서 모달 만들어보기
      return false;
    }
    const auth = firebaseAuth;
    try {
      await sendPasswordResetEmail(auth, inputValue.email);
      await setPageState("complete");
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
    }
    return;
  };

  const goToPreviousScreen = () => navigate("/signin");

  return {
    inputValue,
    changeInputValue,
    submitFindPasswordData,
    errorMsgState,
    goToPreviousScreen,
  };
}
