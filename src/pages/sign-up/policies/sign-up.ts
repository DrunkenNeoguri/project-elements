export const isUserProgressedSigningUp = (pageState: string) => {
  if (pageState === "signUp") return true;
  return false;
};
