import { colors } from "../../utils/util-color";
import { CounterColorThemeType } from "../../components/counter/counter.types";

export const convertColorThemeByInputColorThemeType = (
  colorTheme?: CounterColorThemeType
) => {
  if (colorTheme === "white") {
    return colors.white;
  } else {
    return colors.black;
  }
};
