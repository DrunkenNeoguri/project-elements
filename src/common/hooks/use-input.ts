import { InputProp } from "../types/input";

export function useInput(props: InputProp) {
  const { id, title, value, onChange, type, errorMessage } = props;
  const isValidPassword = () => {
    return;
  };

  return { isValidPassword };
}
