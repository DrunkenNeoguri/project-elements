import { collection, getDocs } from "firebase/firestore";
import { useLayoutEffect, useState } from "react";
import { firebaseAuth, firestore } from "../../../utils/util-firebase";
import { TravelListType } from "../../../common/types/template";
import { useSearchParams } from "react-router-dom";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";

export default function useMainListSection() {
  const [traveLists, setTraveLists] = useState<TravelListType[]>([]);
  const [searchParams] = useSearchParams();
  const searchQueryString = searchParams.get("search");

  useLayoutEffect(() => {
    const getUserTravelLists = async () => {
      try {
        const listsArray: TravelListType[] = [];
        const userUid = firebaseAuth.currentUser?.uid;
        const docsState = await getDocs(
          collection(firestore, `travels`, userUid!, "docs")
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

        setTraveLists([...listsArray]);
      } catch (error) {
        const errorMessage = convertUnknownTypeErrorToStringMessage(error);
      }
    };

    getUserTravelLists();
  }, []);

  return { traveLists, searchQueryString };
}
