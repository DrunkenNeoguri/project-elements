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

export const changeEmailErrorMsg = (email?: string) => {
  if (!email) {
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

export const changePasswordErrorMsg = (password?: string) => {
  if (!password) {
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
  password?: string,
  confirmPassword?: string
) => {
  if (!confirmPassword) {
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

export const changeUsernameErrorMsg = (username?: string) => {
  if (!username) {
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
