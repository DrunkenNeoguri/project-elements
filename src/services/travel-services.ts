import { collection, doc, getDocs, runTransaction } from "firebase/firestore";
import { firestore } from "../utils/util-firebase";
import { TravelBasicType } from "../types/travel.types";
import { convertUnknownTypeErrorToStringMessage } from "../utils/util-convert";
import {
  basicTemplate,
  domesticTemplate,
  foreignTemplate,
} from "../utils/util-template";

class TravelService {
  static async getUserTravelList(userUid: string, keyword?: string | null) {
    try {
      let travelList: TravelBasicType[] = [];
      const docsState = await getDocs(
        collection(await firestore(), `travels`, userUid, "docs")
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

  static async postCreateNewTravel(
    userUid: string,
    useTemplate: boolean,
    formData: TravelBasicType
  ) {
    try {
      const template = () => {
        if (!useTemplate) return basicTemplate;
        if (formData.travelType === "domestic") return domesticTemplate;
        if (formData.travelType === "foreign") return foreignTemplate;
      };

      const userInfo = localStorage.getItem("userInfo") ?? "";
      const parseUserInfo = JSON.parse(userInfo);

      await runTransaction(await firestore(), async (transaction) => {
        await transaction.set(
          doc(
            collection(await firestore(), `travels`, userUid, "docs"),
            formData.id
          ),
          { ...formData }
        );

        await transaction.set(
          doc(
            collection(await firestore(), `elements`, userUid, "docs"),
            formData.id
          ),
          { info: { ...formData }, elements: { ...template() } }
        );

        await transaction.set(doc(await firestore(), `users`, userUid), {
          ...parseUserInfo,
          recentTravel: formData.id,
        });
      });

      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }
}

export default TravelService;
