import { HeaderType } from "../../components/header/header.types";

export const placeSVGIconByHeaderType = (headerType: HeaderType) => {
  switch (headerType) {
    case "error":
      return 1;
    default:
      return 0;
  }
};
