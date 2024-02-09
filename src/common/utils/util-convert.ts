export const convertUnknownTypeErrorToStringMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return String("Unknown Error :" + error);
};
