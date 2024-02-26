import { ButtonColorType } from "../types/button";

export const isButtonBgColorPrimaryOrInvalidOrSecondary = (
  colorType?: ButtonColorType
) => {
  switch (colorType) {
    case "white":
    case "primary-reverse":
    case "secondary-reverse":
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

export const isButtonTextColorPrimaryOrInvalidOrSecondary = (
  colorType?: ButtonColorType
) => {
  switch (colorType) {
    case "primary-reverse":
      return "#1E90FF";
    case "secondary-reverse":
      return "#008D18";
    case "white":
      return "#373737";
    default:
      return "#FFFFFF";
  }
};
