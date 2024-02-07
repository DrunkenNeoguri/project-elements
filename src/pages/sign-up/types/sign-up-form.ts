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
