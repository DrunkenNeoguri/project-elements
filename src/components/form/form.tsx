import {
  ButtonHTMLAttributes,
  ChangeEvent,
  Dispatch,
  FormEvent,
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import {
  CorrectIcon,
  IncorrectIcon,
  MinusIcon,
  PlusIcon,
} from "../../assets/icons/icons";
import Button from "../button/button";

/* eslint-disable @typescript-eslint/no-explicit-any */

// Form Context API
type FormContextType = {
  formData: Record<string, any>;
  handleFormData: (name: string, value: any) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

// Form
type FormPropType = FormHTMLAttributes<HTMLFormElement> &
  PropsWithChildren & {
    onSubmit: (formData: Record<string, any>) => void;
    formData: Record<string, any>;
    setFormData: Dispatch<SetStateAction<Record<string, any>>>;
  };

function Form(props: FormPropType) {
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
type InputPropType = InputHTMLAttributes<HTMLInputElement> & {
  colorTheme?: "black" | "white";
};

function Input(props: InputPropType) {
  const { id, colorTheme = "black", ...rest } = props;
  const formContext = useContext(FormContext);

  if (!formContext) {
    return;
  }

  const { formData, handleFormData } = formContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFormData(id!, e.currentTarget.value);
  };

  const inputTheme = {
    black: "border-black",
    white: "border-white",
  };

  const colorStyle =
    "bg-invalidLight w-full font-medium16 text-black border rounded m-0 outline-none box-border p-3 mt-1 mb-3 " +
    inputTheme[colorTheme];

  return (
    <input
      id={id}
      className={colorStyle}
      {...rest}
      value={formData[id!] || ""}
      onChange={handleChange}
      style={{ color: "#373737" }}
    />
  );
}

// Label
type LabelPropType = LabelHTMLAttributes<HTMLLabelElement> &
  PropsWithChildren & {
    colorTheme?: "black" | "white";
  };

function Label(props: LabelPropType) {
  const { children, colorTheme = "black", ...rest } = props;

  const labelTheme = {
    black: "text-black",
    white: "text-white",
  };

  const labelStyle = "font-bold12 mb-1 " + labelTheme[colorTheme];
  return (
    <label className={labelStyle} {...rest}>
      {children}
    </label>
  );
}

// Error Message
type ErrorMessagePropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
};

function ErrorMessage(props: ErrorMessagePropType) {
  const { text, ...rest } = props;
  return (
    <span className="font-medium10 text-error mt-[1px]" {...rest}>
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

type CounterPropType = {
  id: string;
  value: number;
  colorTheme: "black" | "white";
  increaseFunc: () => void;
  decreaseFunc: () => void;
  measure?: string;
};

function Counter(props: CounterPropType) {
  const {
    id,
    value,
    colorTheme = "black",
    measure,
    increaseFunc,
    decreaseFunc,
  } = props;

  const spanTheme = {
    black: "border-black",
    white: "border-white",
  };

  const viewStyle =
    "bg-invalidLight flex justify-center items-center font-medium16 text-black w-full m-0 outline-none box-border border " +
    spanTheme[colorTheme];

  const handleIncrease = () => {
    increaseFunc();
  };

  const handleDecrease = () => {
    decreaseFunc();
  };

  return (
    <div className="flex mt-1 mb-3">
      <button
        onClick={handleDecrease}
        className="bg-primary flex justify-center items-center font-medium12 text-primary border-none outline-none p-0 m-0 w-full max-w-[60px] h-11 rounded-l cursor-pointer drop-shadow-[1px_0_1px_#00000064]"
      >
        <MinusIcon />
      </button>
      <span id={id} className={viewStyle}>
        {`${value}${measure ?? ""}`}
      </span>
      <button
        onClick={handleIncrease}
        className="bg-primary flex justify-center items-center font-medium12 text-primary border-none outline-none p-0 m-0 w-full max-w-[60px] h-11 rounded-r cursor-pointer drop-shadow-[-1px_0_1px_#00000064]"
      >
        <PlusIcon />
      </button>
    </div>
  );
}

Form.Label = Label;
Form.Input = Input;
Form.Counter = Counter;
Form.Button = Button;
Form.ErrorMessage = ErrorMessage;
Form.VaildIcon = ValidIcon;

export default Form;
/* eslint-enable @typescript-eslint/no-explicit-any */
