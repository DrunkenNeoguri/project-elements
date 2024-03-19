import { FormEvent, useState } from "react";
import { setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import {
  hasAutoSignInStateInLocalStorage,
  isInvalidatedSignInFormInput,
} from "../policies/sign-in-form";
import { ExposeErrorStateType, FormInputType } from "../types/sign-in-form";
import { useNavigate } from "react-router-dom";
import { convertPersistenceByAutoSignInState } from "../utils/sign-in-form";

export default function useSignInForm() {
  const [formInput, setFormInput] = useState<FormInputType>({
    email: "",
    password: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<ExposeErrorStateType>({
    email: false,
    password: false,
  });
  const [autoSignInState, setAutoSignInState] = useState(
    hasAutoSignInStateInLocalStorage()
  );
  const navigate = useNavigate();

  const updateFormInput = (type: "email" | "password", value: string) => {
    setFormInput({ ...formInput, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
    return;
  };

  const toggleAutoSignInState = () => {
    localStorage.setItem("autoSignIn", String(!autoSignInState));
    return setAutoSignInState(!autoSignInState);
  };

  const postSignInProcess = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalidatedSignInFormInput(formInput)) {
      // TODO: createPortal 써서 모달 만들어보기
      return false;
    }

    try {
      const auth = firebaseAuth;

      const persistenceSetting =
        convertPersistenceByAutoSignInState(autoSignInState);

      const persistanceState = await setPersistence(auth, persistenceSetting);

      if (persistanceState !== undefined) {
        throw new Error(
          "Persistance Setting Error. Please inquire used e-mail to administrator."
        );
      }

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

  return {
    formInput,
    updateFormInput,
    autoSignInState,
    toggleAutoSignInState,
    postSignInProcess,
    errorMsgState,
  };
}
