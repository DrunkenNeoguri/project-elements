import { collection, doc, getDoc } from "firebase/firestore";
import { firestore } from "../utils/util-firebase";
import { convertUnknownTypeErrorToStringMessage } from "../utils/util-convert";

export default class ElementService {
  static async getTravelElementListData(userUid: string, id: string) {
    try {
      // TODO: 추후, 두 데이터 통합해서 받아오도록 수정
      // TODO: 도메인과 DB 컬렉션명이 일치하지 않으니 travels, elements로 수정
      const travelDataState = await getDoc(
        doc(collection(await firestore(), `travels`, userUid, "docs"), id)
      );

      const elementListDataState = await getDoc(
        doc(collection(await firestore(), `lists`, userUid, "docs"), id)
      );

      const [travelData, elementListData] = [
        travelDataState.data(),
        elementListDataState.data(),
      ];

      return { travelData, elementListData };
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }
}
