import { AccountFormType } from "../../../../types/user.types";
import {
  commonBlankErrorMsg,
  emailInvalidErrorMsg,
  emailRegExp,
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

export function checkForgetDataTypeCheck(
  formData: Record<string, string>
): formData is Pick<AccountFormType, "email"> {
  if (changeEmailErrorMsg(formData.email) !== undefined) {
    return false;
  }

  const formKeys = Object.keys(formData);

  if (formKeys.length !== 1 || !formKeys.includes("email")) {
    return false;
  }

  return true;
}
