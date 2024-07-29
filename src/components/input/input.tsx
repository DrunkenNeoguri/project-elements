"use client";
import { ChangeEvent, InputHTMLAttributes, useContext } from "react";
import { FormContext } from "../form/form";

type InputPropType = InputHTMLAttributes<HTMLInputElement> & {
  colorTheme?: "black" | "white";
  styles?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputPropType) {
  const { id, colorTheme = "black", styles, value, onChange, ...rest } = props;
  const formContext = useContext(FormContext);
  const inputTheme = {
    black: "border-black ",
    white: "border-white ",
  };

  if (!formContext) {
    return (
      <input
        id={id}
        className={
          "bg-invalidLight w-full font-medium16 text-black border rounded m-0 outline-none box-border p-3 mt-1 " +
          inputTheme[colorTheme] +
          styles
        }
        {...rest}
        value={value}
        onChange={onChange}
      />
    );
  }

  const { formData, handleFormData } = formContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFormData(id!, e.currentTarget.value);
  };

  return (
    <input
      id={id}
      className={
        "bg-invalidLight w-full font-medium16 text-black border rounded m-0 outline-none box-border p-3 mt-1 " +
        inputTheme[colorTheme] +
        styles
      }
      {...rest}
      value={formData[id!] || ""}
      onChange={handleChange}
    />
  );
}
