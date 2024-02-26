import { FormEvent } from "react";

export type InputColorThemeType = "black" | "white";
export type InputType = "text" | "password" | "email";

export type InputProp = {
  id: string;
  title: string;
  value: string;
  placeholder?: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  type: InputType;
  errorMessage?: string;
  firstInputCheck?: boolean;
  errorCondition?: RegExp | boolean;
  colorTheme?: InputColorThemeType;
};

export type InputColorThemeProp = {
  $colorTheme?: InputColorThemeType;
};
