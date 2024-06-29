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
  const [openState, setOpenState] = useState({ state: false, message: "" });
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const updateFormInput = (type: "email", value: string) => {
    setFormInput({ ...formInput, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
    return;
  };

  const postFindPasswordProcess = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalidatedFindPasswordInputData(formInput)) {
      return setErrorMsgState({ email: true });
    }

    try {
      const auth = firebaseAuth;
      auth.languageCode = "ko";
      await sendPasswordResetEmail(auth, formInput.email);
      searchParams.set("step", "complete");
      return setSearchParams(searchParams);
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
      return setOpenState({ state: true, message: errorMessage });
    }
  };

  const goToPreviousScreen = () => {
    return navigate("/signin");
  };

  return {
    openState,
    setOpenState,
    formInput,
    updateFormInput,
    postFindPasswordProcess,
    errorMsgState,
    goToPreviousScreen,
  };
}
