export const isUserProgressedFindPassword = (pageState: string) => {
  if (pageState === "InProgress") return true;
  return false;
};
