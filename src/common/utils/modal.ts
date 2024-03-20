import { colors } from "../../utils/util-color";
import { ModalType } from "../types/modal";

export const convertTitleColorByModalIconType = (modalType: ModalType) => {
  switch (modalType) {
    case "alert":
      return colors.error;
    case "checked":
      return colors.secondary;
    case "info":
    case "confirm":
    default:
      return colors.secondary;
  }
};

export const convertSVGIconByIconType = (modalType: ModalType) => {
  switch (modalType) {
    case "alert":
      return 3;
    case "checked":
      return 2;
    case "confirm":
      return 1;
    case "info":
    default:
      return 0;
  }
};
