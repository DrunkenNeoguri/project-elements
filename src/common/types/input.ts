import { FormEvent } from "react";

export type InputProp = {
  id: string;
  title: string;
  value: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  type: "text" | "password" | "email";
  errorMessage?: string;
  regularExpression?: RegExp;
};
