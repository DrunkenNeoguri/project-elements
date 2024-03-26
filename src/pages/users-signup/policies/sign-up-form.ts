import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import {
  emailRegExp,
  passwordRegExp,
  usernameRegExp,
} from "../../../utils/util-constants";
import { FormInputType } from "../types/sign-up-form";

export const isInvalidatedSignUpInputData = (formInput: FormInputType) => {
  if (isTrueCompareWithValueAndCondition(formInput.email, emailRegExp)) {
    return true;
  }
  if (isTrueCompareWithValueAndCondition(formInput.password, passwordRegExp)) {
    return true;
  }
  if (
    isTrueCompareWithValueAndCondition(
      formInput.confirmPassword,
      passwordRegExp,
      formInput.password
    )
  ) {
    return true;
  }
  if (isTrueCompareWithValueAndCondition(formInput.username, usernameRegExp)) {
    return true;
  }
  return false;
};
