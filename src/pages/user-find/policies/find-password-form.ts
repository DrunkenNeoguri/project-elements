import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import { emailRegExp } from "../../../common/utils/util-constants";
import { FindPasswordValueType } from "../types/find-password-form";

export const isInvalidatedFindPasswordInputData = (
  FindPasswordData: FindPasswordValueType
) => {
  if (isTrueCompareWithValueAndCondition(FindPasswordData.email, emailRegExp)) {
    return true;
  }
};
