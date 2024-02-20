import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  SignUpPageStateType,
  SignUpValueType,
  SignUpViewErrorType,
} from "../types/sign-up-form";
import { isInvalidatedSignUpInputData } from "../policies/sign-up-form";
import { firebaseAuth } from "../../../common/utils/util-firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { convertUnknownTypeErrorToStringMessage } from "../../../common/utils/util-convert";
import { useNavigate } from "react-router-dom";

export default function useSignUpForm() {
  const [inputValue, setInputValue] = useState<SignUpValueType>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsgState, setErrorMsgState] = useState<SignUpViewErrorType>({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const navigate = useNavigate();

  const changeInputValue = (
    type: "email" | "password" | "confirmPassword",
    value: string
  ) => {
    setInputValue({ ...inputValue, [type]: value });
    if (!errorMsgState[type]) {
      setErrorMsgState({ ...errorMsgState, [type]: true });
    }
  };

  const submitSignUpData = async (
    e: FormEvent<HTMLFormElement>,
    setPageState: Dispatch<SetStateAction<SignUpPageStateType>>
  ) => {
    e.preventDefault();
    if (isInvalidatedSignUpInputData(inputValue)) {
      // TODO: createPortal 써서 모달 만들어보기
      return false;
    }
    const auth = firebaseAuth;
    try {
      const createAccountResult = await createUserWithEmailAndPassword(
        auth,
        inputValue.email,
        inputValue.password
      );

      if (createAccountResult.user !== null) {
        await sendEmailVerification(createAccountResult.user);
        // return이 void이기 때문에 별도로 받을 수 있는 값은 없음.
        setPageState({
          state: "verify",
          email: createAccountResult.user.email,
        });
      }
    } catch (error) {
      const errorMessage = convertUnknownTypeErrorToStringMessage(error);
    }
  };

  const goToPreviousScreen = () => navigate("/signin");

  return {
    inputValue,
    changeInputValue,
    submitSignUpData,
    errorMsgState,
    goToPreviousScreen,
  };
}
