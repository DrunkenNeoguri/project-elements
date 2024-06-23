import { AccountFormType } from "../../../../types/user.types";
import {
  commonBlankErrorMsg,
  emailInvalidErrorMsg,
  emailRegExp,
  passwordIncorrectErrorMsg,
  passwordInvalidErrorMsg,
  passwordRegExp,
  usernameInvalidErrorMsg,
  usernameRegExp,
} from "../../../../utils/util-constants";

export const changeEmailErrorMsg = (email: string | undefined) => {
  if (email === undefined) {
    return "";
  }
  if (email.trim() === "") {
    return commonBlankErrorMsg;
  }
  if (!emailRegExp.test(email)) {
    return emailInvalidErrorMsg;
  } else {
    return;
  }
};

export const changePasswordErrorMsg = (password: string | undefined) => {
  if (password === undefined) {
    return "";
  }
  if (password.trim() === "") {
    return commonBlankErrorMsg;
  }
  if (!passwordRegExp.test(password)) {
    return passwordInvalidErrorMsg;
  } else {
    return;
  }
};

export const changeConfirmPasswordErrorMsg = (
  password: string | undefined,
  confirmPassword: string | undefined
) => {
  if (confirmPassword === undefined) {
    return "";
  }
  if (confirmPassword.trim() === "") {
    return commonBlankErrorMsg;
  }
  if (!passwordRegExp.test(confirmPassword)) {
    return passwordInvalidErrorMsg;
  }
  if (password !== confirmPassword) {
    return passwordIncorrectErrorMsg;
  }
  return;
};

export const changeUsernameErrorMsg = (username: string | undefined) => {
  if (username === undefined) {
    return "";
  }
  if (username.trim() === "") {
    return commonBlankErrorMsg;
  }
  if (!usernameRegExp.test(username)) {
    return usernameInvalidErrorMsg;
  }
  return;
};

export function checkSignUpDataTypeCheck(
  formData: Record<string, string>
): formData is AccountFormType {
  if (
    changeEmailErrorMsg(formData.email) !== undefined ||
    changePasswordErrorMsg(formData.password) !== undefined ||
    changeConfirmPasswordErrorMsg(
      formData.password,
      formData.confirmPassword
    ) !== undefined ||
    changeUsernameErrorMsg(formData.username) !== undefined
  ) {
    return false;
  }

  const formKeys = Object.keys(formData);

  if (
    formKeys.length !== 4 ||
    !formKeys.includes("email") ||
    !formKeys.includes("password") ||
    !formKeys.includes("confirmPassword") ||
    !formKeys.includes("username")
  ) {
    return false;
  }
  return true;
}
