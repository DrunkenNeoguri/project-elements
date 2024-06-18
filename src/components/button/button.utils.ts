import { colors } from "../../utils/util-color";
import { ButtonColorType } from "./button.types";

export const convertBackgroundColorByButtonColorType = (
  colorType?: ButtonColorType
) => {
  switch (colorType) {
    case "white":
    case "primary-reverse":
    case "secondary-reverse":
    case "invalid-reverse":
      return colors.white;
    case "invalid":
      return colors.invalid;
    case "black":
      return colors.black;
    case "secondary":
      return colors.secondary;
    default:
      return colors.primary;
  }
};

export const convertFontColorByButtonColorType = (
  colorType?: ButtonColorType
) => {
  switch (colorType) {
    case "primary-reverse":
      return colors.primary;
    case "secondary-reverse":
      return colors.secondary;
    case "invalid-reverse":
      return colors.invalid;
    case "white":
      return colors.black;
    default:
      return colors.white;
  }
};
