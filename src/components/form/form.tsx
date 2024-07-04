import {
  Dispatch,
  FormEvent,
  FormHTMLAttributes,
  PropsWithChildren,
  SetStateAction,
  createContext,
} from "react";
import { CorrectIcon, IncorrectIcon } from "../../assets/icons/icons";
import Button from "../button/button";
import Label from "../label/label";
import Counter from "../counter/counter";
import ErrorText from "../error-text/error-text";
import Input from "../input/input";

/* eslint-disable @typescript-eslint/no-explicit-any */

// Form Context API
type FormContextType = {
  formData: Record<string, any>;
  handleFormData: (name: string, value: any) => void;
};

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

// Form
type FormPropType = FormHTMLAttributes<HTMLFormElement> &
  PropsWithChildren & {
    onSubmit: (formData: Record<string, any>) => void;
    formData: Record<string, any>;
    setFormData: Dispatch<SetStateAction<Record<string, any>>>;
    styles?: string;
  };

function Form(props: FormPropType) {
  const { children, onSubmit, formData, setFormData, styles } = props;

  const handleFormData = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContext.Provider value={{ formData, handleFormData }}>
      <form
        className={"flex flex-col w-full px-0 box-border " + styles}
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}

// Valid Icon
function ValidIcon(validState: boolean) {
  return (
    <div className="absolute py-3 pt-3 m-0 top-0 right-0 z-[1] box-border">
      {validState ? <CorrectIcon /> : <IncorrectIcon />}
    </div>
  );
}

Form.Label = Label;
Form.Input = Input;
Form.Counter = Counter;
Form.Button = Button;
Form.ErrorText = ErrorText;
Form.VaildIcon = ValidIcon;

export default Form;

/* eslint-enable @typescript-eslint/no-explicit-any */
