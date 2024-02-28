export type SignUpValueType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUpViewErrorType = {
  email: false;
  password: false;
  confirmPassword: false;
};

export type SignUpPageStateType = {
  state: "signUp" | "verify";
  email: string | null;
};
