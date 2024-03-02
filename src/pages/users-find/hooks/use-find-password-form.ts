import { FormEvent, useState } from "react";
import { isInvalidatedFindPasswordInputData } from "../policies/find-password-form";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { firebaseAuth } from "../../../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import {
  ExposeErrorStateType,
  FormInputType,
} from "../types/find-password-form";

export default function useFindPasswordForm() {
  const [formInput, setFormInput] = useState<FormInputType>({
    email: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<ExposeErrorStateType>({
    email: false,
  });
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const updateFormInput = (type: "email", value: string) => {
    setFormInput({ ...formInput, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
    return;
  };

  const updateFindPasswordProcess = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalidatedFindPasswordInputData(formInput)) {
      // TODO: createPortal 써서 모달 만들어보기
      return false;
    }
    try {
      const auth = firebaseAuth;
      await sendPasswordResetEmail(auth, formInput.email);
      await searchParams.set("step", "complete");
      await setSearchParams(searchParams);
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
    updateFindPasswordProcess,
    errorMsgState,
    goToPreviousScreen,
  };
}
