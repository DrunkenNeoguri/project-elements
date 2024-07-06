import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { firestore } from "../utils/util-firebase";
import { TravelBasicInfoType } from "../types/travel.types";
import { convertUnknownTypeErrorToStringMessage } from "../utils/util-convert";
import {
  basicTemplate,
  domesticTemplate,
  foreignTemplate,
} from "../utils/util-template";

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

  static async postCreateNewTravel(
    userUid: string,
    useTemplate: boolean,
    formData: TravelBasicInfoType
  ) {
    try {
      const template = () => {
        if (!useTemplate) return basicTemplate;
        if (formData.travelType === "domestic") return domesticTemplate;
        if (formData.travelType === "foreign") return foreignTemplate;
      };

      const batch = writeBatch(firestore);

      const travelsReference = doc(
        collection(firestore, `travels`, userUid, "docs"),
        formData.id
      );

      const ListsReference = doc(
        collection(firestore, `lists`, userUid, "docs"),
        formData.id
      );

      const userReferecnce = doc(firestore, `users`, userUid);

      await batch.set(travelsReference, {
        ...formData,
      });

      await batch.set(ListsReference, {
        ...template,
        id: formData.id,
      });

      await batch.set(userReferecnce, {
        recentTravel: formData.id,
      });

      await batch.commit();
      return "OK";
    } catch (error) {
      return new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }
}

export default TravelService;
