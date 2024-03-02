import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import { passwordRegExp } from "../../../utils/util-constants";
import { ChangePasswordValueType } from "../types/change-password-form";

export const isInvalidatedChangePasswordInputData = (
  ChangePasswordData: ChangePasswordValueType
) => {
  if (
    isTrueCompareWithValueAndCondition(
      ChangePasswordData.password,
      passwordRegExp
    )
  ) {
    return true;
  }
  if (
    isTrueCompareWithValueAndCondition(
      ChangePasswordData.confirmPassword,
      passwordRegExp,
      ChangePasswordData.password
    )
  ) {
    return true;
  }
  return false;
};
