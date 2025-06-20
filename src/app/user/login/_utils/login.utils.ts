import { AccountFormType } from "../../../../types/user.types";
import {
  commonBlankErrorMsg,
  emailInvalidErrorMsg,
  emailRegExp,
  passwordInvalidErrorMsg,
  passwordRegExp,
} from "../../../../utils/util-constants";
import { changeUsernameErrorMsg } from "../../signup/_utils/signup.utils";

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

export function checkLoginDataTypeCheck(
  formData: Record<string, string>
): formData is Pick<AccountFormType, "email" | "password"> {
  if (
    changeEmailErrorMsg(formData.email) !== undefined ||
    changePasswordErrorMsg(formData.password) !== undefined
  ) {
    return false;
  }

  const formKeys = Object.keys(formData);

  if (
    formKeys.length !== 2 ||
    !formKeys.includes("email") ||
    !formKeys.includes("password")
  ) {
    return false;
  }
  return true;
}

export function checkPasswordDataTypeCheck(
  formData: Record<string, string>
): formData is Pick<AccountFormType, "password"> {
  if (changePasswordErrorMsg(formData.password) !== undefined) {
    return false;
  }

  return true;
}

export function checkUsernameDataTypeCheck(
  formData: Record<string, string>
): formData is Pick<AccountFormType, "username"> {
  if (changeUsernameErrorMsg(formData.username) !== undefined) {
    return false;
  }

  return true;
}
