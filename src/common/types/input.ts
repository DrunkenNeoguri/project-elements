export type InputProp = {
  id: string;
  title: string;
  value: string | number;
  onChange: () => void;
  type: "text" | "password" | "email";
  errorMessage: string;
};
