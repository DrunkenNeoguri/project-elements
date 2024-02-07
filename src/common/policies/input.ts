import {
  commonBlankErrorMsg,
  emailInvalidErrorMsg,
  passwordIncorrectErrorMsg,
  passwordInvalidErrorMsg,
} from "../utils/util-constants";

export const isPropHasLabelText = (text: string) => {
  return text ? true : false;
};

export const isShowErrorMessage = (
  firstInputCheck: boolean,
  errorCondition: RegExp | boolean
) => {
  return firstInputCheck && errorCondition ? true : false;
};

export const isTrueCompareWithValueAndCondition = (
  value: string,
  condition?: RegExp,
  comparingValue?: string
) => {
  if (condition && !condition.test(value)) return true;
  if (comparingValue && value !== comparingValue) return true;
  return false;
};

export const setEmailErrorMsgDependingOnTheCase = (value: string) => {
  return value.trim() === "" ? commonBlankErrorMsg : emailInvalidErrorMsg;
};

export const setPasswordErrorMsgDependingOnTheCase = (value: string) => {
  return value.trim() === "" ? commonBlankErrorMsg : passwordInvalidErrorMsg;
};

export const setConfirmPasswordErrorMsgDependingOnTheCase = (
  value: string,
  comparingValue: string
) => {
  if (value.trim() === "") return commonBlankErrorMsg;
  if (value.length < 8) return passwordInvalidErrorMsg;
  if (comparingValue !== value) return passwordIncorrectErrorMsg;
};
