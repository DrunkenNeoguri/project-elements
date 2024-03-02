import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import { emailRegExp } from "../../../utils/util-constants";
import { FormInputType } from "../types/find-password-form";

export const isInvalidatedFindPasswordInputData = (
  formInput: FormInputType
) => {
  if (isTrueCompareWithValueAndCondition(formInput.email, emailRegExp)) {
    return true;
  }
};
