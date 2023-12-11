import { fontsStyle } from "./utilfonts";

export const buttonStyle = (styleType: string) => {
  switch (styleType) {
    case "full":
      return `${fontsStyle.medium.medium16} width: 279px; height: 48px; border-radius: 12px;`;
    case "xl":
      return `${fontsStyle.medium.medium16} width: 194px; height: 48px; border-radius: 10px;`;
    case "lg":
      return `${fontsStyle.medium.medium14} width: 164px; height: 44px; border-radius: 9px;`;
    case "md":
      return `${fontsStyle.medium.medium14} width: 148px; height: 36px; border-radius: 8px;`;
    case "sm":
      return `${fontsStyle.medium.medium12} width: 126px; height: 30px; border-radius: 6px;`;
    case "xs":
      return `${fontsStyle.medium.medium12} width: 103px; height: 28px; border-radius: 6px;`;
    default:
      return "";
  }
};
