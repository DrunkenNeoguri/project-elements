import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import { passwordRegExp } from "../../../utils/util-constants";
import { FormInputType } from "../types/change-password-form";

export const isInvalidatedChangePasswordInputData = (
  formInput: FormInputType
) => {
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
  return false;
};
