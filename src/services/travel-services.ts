import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../utils/util-firebase";
import { TravelBasicInfoType } from "../types/template.types";
import { convertUnknownTypeErrorToStringMessage } from "../utils/util-convert";

class TravelService {
  static async getUserTravelLists(userUid: string) {
    try {
      const listsArray: TravelBasicInfoType[] = [];
      const docsState = await getDocs(
        collection(firestore, `travels`, userUid, "docs")
      );

      docsState.forEach((doc) => {
        const {
          travelType,
          title,
          departureAt,
          travelPeriod,
          destination,
          id,
        } = doc.data();
        listsArray.push({
          travelType,
          title,
          departureAt,
          travelPeriod,
          destination,
          id,
        });
      });

      return listsArray;
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }
}

export default TravelService;
