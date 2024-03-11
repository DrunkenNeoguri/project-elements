import { FormEvent } from "react";

export type InputColorThemeType = "black" | "white";
export type InputType = "text" | "password" | "email" | "date" | "number";

export type InputPropType = {
  id: string;
  title: string;
  value: string | number;
  placeholder?: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  type: InputType;
  errorMessage?: string;
  firstInputCheck?: boolean;
  errorCondition?: RegExp | boolean;
  colorTheme?: InputColorThemeType;
};

export type StInputColorThemeType = {
  $colorTheme?: InputColorThemeType;
  checkErrorMessage?: boolean;
};

export type PolicyErrorMessagePropType = {
  firstInputCheck?: boolean;
  errorCondition?: RegExp | boolean;
};

export type PolicyValidationIconPropType = {
  firstInputCheck?: boolean;
  errorMessage?: string;
};
