import {
  ButtonHTMLAttributes,
  ChangeEvent,
  Dispatch,
  FormEvent,
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import { CorrectIcon, IncorrectIcon } from "../../assets/icons/icons";

/* eslint-disable @typescript-eslint/no-explicit-any */

// Form Context API
type FormContextType = {
  formData: Record<string, any>;
  handleFormData: (name: string, value: any) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

// Form
type FormProp = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  onSubmit: (formData: Record<string, any>) => void;
  formData: Record<string, any>;
  setFormData: Dispatch<SetStateAction<Record<string, any>>>;
};

function Form(props: FormProp) {
  const { onSubmit, children, formData, setFormData } = props;

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
        className="flex flex-col w-full px-4 box-border"
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}

// Input
function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { id } = props;
  const formContext = useContext(FormContext);

  if (!formContext) {
    return;
  }

  const { formData, handleFormData } = formContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFormData(id!, e.currentTarget.value);
  };

  return (
    <input
      className="bg-invalidLight w-full font-medium16 text-black border border-black rounded m-0 outline-none box-border p-3 mt-1 mb-3"
      {...props}
      value={formData[id!] || ""}
      onChange={handleChange}
      style={{ color: "#373737" }}
    />
  );
}

// Label
type LabelProp = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

function Label(props: LabelProp) {
  const { children } = props;
  return (
    <label className="font-bold12 mb-1 text-black" {...props}>
      {children}
    </label>
  );
}

// Button
type ButtonProp = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

function Button(props: ButtonProp) {
  const { children } = props;
  return (
    <button
      className="bg-primary flex justify-center items-center w-full h-11 border-none rounded border-box font-bold16 text-white cursor-pointer my-3"
      {...props}
    >
      {children}
    </button>
  );
}

// Error Message
type ErrorMessageProp = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
};

function ErrorMessage(props: ErrorMessageProp) {
  const { text } = props;
  return (
    <span className="font-medium10 text-error mt-[1px]" {...props}>
      {text}
    </span>
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
Form.Button = Button;
Form.ErrorMessage = ErrorMessage;
Form.VaildIcon = ValidIcon;

export default Form;
/* eslint-enable @typescript-eslint/no-explicit-any */
