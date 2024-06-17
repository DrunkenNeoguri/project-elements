import { FormEvent, useState } from "react";
import {
  sendEmailVerification,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
  const [modalState, setModalState] = useState({
    isOpen: false,
    message: "",
    buttonText: "",
    closeFunc: () => {},
  });
  const navigate = useNavigate();

  const clearModalState = () => {
    return setModalState({
      isOpen: false,
      message: "",
      buttonText: "",
      closeFunc: () => {},
    });
  };

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
      auth.languageCode = "ko";
      const persistenceSetting =
        convertPersistenceByAutoSignInState(autoSignInState);
      await setPersistence(auth, persistenceSetting);
      const signInResult = await signInWithEmailAndPassword(
        auth,
        formInput.email,
        formInput.password
      );

      if (signInResult !== undefined) {
        if (!signInResult.user.emailVerified) {
          return setModalState({
            isOpen: true,
            message: `본 계정은 아직 본인 인증이 완료되지 않았습니다.\n아래 버튼을 눌러 본인 인증을 진행해주세요.`,
            buttonText: "본인 인증 이메일 보내기",
            closeFunc: async () => {
              clearModalState();
              await sendEmailVerification(signInResult.user);
              return navigate(
                `/users/signup?step=complete&email=${signInResult.user.email}`
              );
            },
          });
        }

        const userInfo = await getDoc(
          doc(firestore, `users`, signInResult.user.uid)
        );
        localStorage.setItem("userInfo", String(userInfo.data()));
        return navigate("/main");
      }
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
      return setModalState({
        isOpen: true,
        message: errorMessage,
        buttonText: "알겠습니다.",
        closeFunc: () => clearModalState(),
      });
    }
  };

  return {
    modalState,
    setModalState,
    formInput,
    updateFormInput,
    autoSignInState,
    toggleAutoSignInState,
    postSignInProcess,
    errorMsgState,
  };
}
