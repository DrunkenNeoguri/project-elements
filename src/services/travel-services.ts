import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../utils/util-firebase";
import { TravelBasicInfoType } from "../types/template.types";
import { convertUnknownTypeErrorToStringMessage } from "../utils/util-convert";

class TravelService {
  static async getUserTravelList(userUid: string, keyword?: string | null) {
    try {
      let travelList: TravelBasicInfoType[] = [];
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
        travelList.push({
          travelType,
          title,
          departureAt,
          travelPeriod,
          destination,
          id,
        });
      });

      if (keyword) {
        travelList = travelList.filter((data) => {
          return (
            data.title.includes(keyword) || data.destination.includes(keyword)
          );
        });

        travelList.sort(
          (a, b) =>
            new Date(a.departureAt).getTime() -
            new Date(b.departureAt).getTime()
        );
      }
      return travelList;
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }
}

export default TravelService;
