import { InputHTMLAttributes } from "react";

export type InputColorThemeType = "black" | "white";
export type InputType = "text" | "password" | "email" | "date" | "number";

export type InputPropType = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  value: string | number;
  errorMessage?: string;
  firstInputCheck?: boolean;
  errorCondition?: RegExp | boolean;
  colorTheme?: InputColorThemeType;
  isViewMark?: boolean;
};

export type StInputColorThemeType = {
  $colorTheme?: InputColorThemeType;
  $checkErrorMessage?: boolean;
};

export type PolicyErrorMessagePropType = {
  firstInputCheck?: boolean;
  errorCondition?: RegExp | boolean;
};

export type PolicyValidationIconPropType = {
  firstInputCheck?: boolean;
  errorMessage?: string;
  isViewMark?: boolean;
};
