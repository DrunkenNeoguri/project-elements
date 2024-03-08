import { collection, getDocs } from "firebase/firestore";
import { useLayoutEffect, useState } from "react";
import { firebaseAuth, firestore } from "../../../utils/util-firebase";
import { TravelListType } from "../../../common/types/template";

export default function useMainListSection() {
  const [traveLists, setTraveLists] = useState<TravelListType[]>([]);

  useLayoutEffect(() => {
    const getUserTravelLists = async () => {
      try {
        const listsArray: TravelListType[] = [];
        const userUid = firebaseAuth.currentUser?.uid;
        const docsState = await getDocs(
          collection(firestore, `travels`, userUid!, "docs")
        );

        // 타입에 맞게 파일화해서 배열에 넣기
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
        console.log(error);
      }
    };

    getUserTravelLists();
  }, []);

  return { traveLists };
}
