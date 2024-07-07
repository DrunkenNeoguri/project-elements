import { AccountFormType } from "../../../../types/user.types";
import {
  commonBlankErrorMsg,
  passwordIncorrectErrorMsg,
  passwordInvalidErrorMsg,
  passwordRegExp,
} from "../../../../utils/util-constants";

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

export function checkResetDataTypeCheck(
  formData: Record<string, string>
): formData is Pick<AccountFormType, "password" | "confirmPassword"> {
  if (
    changePasswordErrorMsg(formData.password) !== undefined ||
    changeConfirmPasswordErrorMsg(
      formData.password,
      formData.confirmPassword
    ) !== undefined
  ) {
    return false;
  }

  const formKeys = Object.keys(formData);

  if (
    formKeys.length !== 2 ||
    !formKeys.includes("password") ||
    !formKeys.includes("confirmPassword")
  ) {
    return false;
  }

  return true;
}
