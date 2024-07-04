"use client";
import { ChangeEvent, InputHTMLAttributes, useContext } from "react";
import { FormContext } from "../form/form";

type InputPropType = InputHTMLAttributes<HTMLInputElement> & {
  colorTheme?: "black" | "white";
  styles?: string;
  value?: string;
  onChange?: () => void;
};

export default function Input(props: InputPropType) {
  const { id, colorTheme = "black", styles, value, onChange, ...rest } = props;
  const formContext = useContext(FormContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (formContext && id) {
      formContext.handleFormData(id, e.currentTarget.value);
    }
    if (onChange) {
      onChange();
    }
  };

  const inputTheme = {
    black: "border-black ",
    white: "border-white ",
  };

  const inputValue = formContext && id ? formContext.formData[id] : value;

  return (
    <input
      id={id}
      className={
        "bg-invalidLight w-full font-medium16 text-black border rounded m-0 outline-none box-border p-3 mt-1 " +
        inputTheme[colorTheme] +
        styles
      }
      {...rest}
      value={inputValue}
      onChange={handleChange}
    />
  );
}
