import { TravelCaseType } from "../../../types/template.types";
import { colors } from "../../../utils/util-color";

export const convertHeaderColorByTravelType = (travelCase: TravelCaseType) => {
  return travelCase === "foreign" ? colors.primarySemiLight : colors.secondary;
};
