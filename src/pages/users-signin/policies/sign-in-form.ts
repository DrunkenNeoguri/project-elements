import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import { emailRegExp, passwordRegExp } from "../../../utils/util-constants";
import { FormInputType } from "../types/sign-in-form";

export const isInvalidatedSignInFormInput = (formInput: FormInputType) => {
  if (isTrueCompareWithValueAndCondition(formInput.email, emailRegExp)) {
    return true;
  }
  if (isTrueCompareWithValueAndCondition(formInput.password, passwordRegExp)) {
    return true;
  }
  return false;
};
