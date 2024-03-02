import { TravelCaseType } from "../../../common/types/template";
import {
  basicTemplate,
  domesticTemplate,
  foreignTemplate,
} from "../../../utils/util-template";

export const setTravelTemplateByTravelTypeAndUserWanted = (
  travelType: TravelCaseType,
  userWant: boolean
) => {
  if (travelType === "foreign" && userWant) {
    return foreignTemplate;
  }
  if (travelType === "domestic" && userWant) {
    return domesticTemplate;
  }
  return basicTemplate;
};
