import { FormEvent, useState } from "react";
import { setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firestore } from "../../../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import {
  hasAutoSignInStateInLocalStorage,
  isInvalidatedSignInFormInput,
} from "../policies/sign-in-form";
import { ExposeErrorStateType, FormInputType } from "../types/sign-in-form";
import { useNavigate } from "react-router-dom";
import { convertPersistenceByAutoSignInState } from "../utils/sign-in-form";
import { doc, getDoc } from "firebase/firestore";

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
  const [openState, setOpenState] = useState({ state: false, message: "" });
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
      return setErrorMsgState({ email: true, password: true });
    }

    try {
      const auth = firebaseAuth;
      const persistenceSetting =
        convertPersistenceByAutoSignInState(autoSignInState);
      await setPersistence(auth, persistenceSetting);
      const signInResult = await signInWithEmailAndPassword(
        auth,
        formInput.email,
        formInput.password
      );

      if (signInResult !== undefined) {
        const userInfo = await getDoc(
          doc(firestore, `users`, signInResult.user.uid)
        );
        localStorage.setItem("userInfo", String(userInfo.data()));
        return navigate("/main");
      }
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
      return setOpenState({ state: true, message: errorMessage });
    }
  };

  return {
    openState,
    setOpenState,
    formInput,
    updateFormInput,
    autoSignInState,
    toggleAutoSignInState,
    postSignInProcess,
    errorMsgState,
  };
}
