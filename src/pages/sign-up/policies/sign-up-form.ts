import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import {
  emailRegExp,
  passwordRegExp,
} from "../../../common/utils/util-constants";
import { SignUpValueType } from "../types/sign-up-form";

export const isInValidatedSignUpInputData = (signUpData: SignUpValueType) => {
  if (isTrueCompareWithValueAndCondition(signUpData.email, emailRegExp)) {
    return true;
  }
  if (isTrueCompareWithValueAndCondition(signUpData.password, passwordRegExp)) {
    return true;
  }
  if (
    isTrueCompareWithValueAndCondition(
      signUpData.confirmPassword,
      passwordRegExp,
      signUpData.password
    )
  ) {
    return true;
  }
  return false;
};
