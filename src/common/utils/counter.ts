import { colors } from "../../utils/util-color";
import { CounterColorThemeType } from "../types/counter";

export const convertColorThemeByInputColorThemeType = (
  colorTheme?: CounterColorThemeType
) => {
  if (colorTheme === "white") {
    return colors.white;
  } else {
    return colors.black;
  }
};
