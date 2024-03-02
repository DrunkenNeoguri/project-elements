import { ButtonColorType } from "../types/button";

export const convertBackgroundColorByButtonColorType = (
  colorType?: ButtonColorType
) => {
  switch (colorType) {
    case "white":
    case "primary-reverse":
    case "secondary-reverse":
    case "invalid-reverse":
      return "#FFFFFF";
    case "invalid":
      return "#909090";
    case "black":
      return "#373737";
    case "secondary":
      return "#008D18";
    default:
      return "#1E90FF";
  }
};

export const convertFontColorByButtonColorType = (
  colorType?: ButtonColorType
) => {
  switch (colorType) {
    case "primary-reverse":
      return "#1E90FF";
    case "secondary-reverse":
      return "#008D18";
    case "invalid-reverse":
      return "#909090";
    case "white":
      return "#373737";
    default:
      return "#FFFFFF";
  }
};
