export const isUserProgressedChangePassword = (pageState: string) => {
  if (pageState === "InProgress") return true;
  return false;
};
