import { TravelCaseType } from "../../../common/types/template";
import { colors } from "../../../utils/util-color";

export const convertHeaderColorByTravelType = (travelCase: TravelCaseType) => {
  return travelCase === "foreign" ? colors.primaryDeep : colors.secondary;
};
