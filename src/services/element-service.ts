import { collection, doc, getDoc } from "firebase/firestore";
import { firestore } from "../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../utils/util-convert";
import { ElementsBasicType } from "../types/element.types";

export default class ElementService {
  static async getElementsData(userUid: string, id: string) {
    try {
      const elementsState = await getDoc(
        doc(collection(await firestore(), `elements`, userUid, "docs"), id)
      );

      if (elementsState instanceof Error) {
        // TODO: 에러 메시지 추후 추가
        return;
      }

      return elementsState.data() as ElementsBasicType;
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }
}
