import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import {
  emailRegExp,
  passwordRegExp,
} from "../../../common/utils/util-constants";
import { SignInValueType } from "../types/sign-in-form";

export const isInvalidatedSignInInputData = (signInData: SignInValueType) => {
  if (isTrueCompareWithValueAndCondition(signInData.email, emailRegExp)) {
    return true;
  }
  if (isTrueCompareWithValueAndCondition(signInData.password, passwordRegExp)) {
    return true;
  }
  return false;
};
