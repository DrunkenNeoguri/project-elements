import { HeaderType } from "../types/header";

export const placeSVGIconByHeaderType = (headerType: HeaderType) => {
  switch (headerType) {
    case "error":
      return 1;
    default:
      return 0;
  }
};
