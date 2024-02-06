export const isPropHasLabelText = (text: string) => {
  return text ? true : false;
};

export const isTrueCompareWithValueAndRegExp = (
  value: string,
  regExp: RegExp | undefined
) => {
  console.log(value, regExp);
  if (!regExp) return false;
  else {
    return !regExp.test(value);
  }
};
