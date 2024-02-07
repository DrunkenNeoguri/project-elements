import { FormEvent } from "react";

export type InputProp = {
  id: string;
  title: string;
  value: string;
  placeholder?: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  type: "text" | "password" | "email";
  errorMessage: string | undefined;
  firstInputCheck: boolean;
  errorCondition: RegExp | boolean;
};
