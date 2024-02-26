export const hasContextInDescription = (context?: string) => {
  return context && context?.trim() !== "" ? true : false;
};
