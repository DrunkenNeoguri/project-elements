import {
  PolicyErrorMessagePropType,
  PolicyValidationIconPropType,
} from "../types/input";

export const hasLabelTextInProps = (text: string) => {
  return text ? true : false;
};

export const isShowErrorMessage = ({
  firstInputCheck,
  errorCondition,
}: PolicyErrorMessagePropType) => {
  if (!firstInputCheck || !errorCondition) {
    return false;
  }
  return firstInputCheck && errorCondition ? true : false;
};

export const isShowValidationIcon = ({
  firstInputCheck,
  errorMessage,
  isViewMark,
}: PolicyValidationIconPropType) => {
  if (!isViewMark) {
    return false;
  }
  if (!errorMessage) {
    return false;
  }
  if (errorMessage && !firstInputCheck) {
    return false;
  }
  return true;
};

export const hasErrorMessage = (errorMessage?: string) => {
  if (errorMessage) {
    return true;
  }
  return false;
};

export const isTrueCompareWithValueAndCondition = (
  value: string,
  condition?: RegExp,
  comparingValue?: string
) => {
  if (value.trim() === "") {
    return true;
  }
  if (condition && !condition.test(value)) {
    return true;
  }
  if (comparingValue && value !== comparingValue) {
    return true;
  }
  return false;
};
