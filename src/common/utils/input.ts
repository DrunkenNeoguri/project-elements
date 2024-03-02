import {
  commonBlankErrorMsg,
  emailInvalidErrorMsg,
  passwordIncorrectErrorMsg,
  passwordInvalidErrorMsg,
} from "../../utils/util-constants";
import { InputColorThemeType } from "../types/input";

export const convertEmailErrorMessageByValue = (value: string) => {
  return value.trim() === "" ? commonBlankErrorMsg : emailInvalidErrorMsg;
};

export const convertPasswordErrorMessageByValue = (value: string) => {
  return value.trim() === "" ? commonBlankErrorMsg : passwordInvalidErrorMsg;
};

export const convertConfirmPasswordErrorMessageByValues = (
  value: string,
  comparingValue: string
) => {
  if (value.trim() === "") {
    return commonBlankErrorMsg;
  }
  if (value.length < 8) {
    return passwordInvalidErrorMsg;
  }
  if (comparingValue !== value) {
    return passwordIncorrectErrorMsg;
  }
};

export const convertColorThemeByInputColorThemeType = (
  colorTheme?: InputColorThemeType
) => {
  if (colorTheme === "white") {
    return "#FFFFFF";
  } else {
    return "#373737";
  }
};
