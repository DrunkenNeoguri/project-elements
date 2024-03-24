import { collection, getDocs } from "firebase/firestore";
import { useLayoutEffect, useState } from "react";
import { firebaseAuth, firestore } from "../../../utils/util-firebase";
import { TravelListType } from "../../../common/types/template";
import { useNavigate, useSearchParams } from "react-router-dom";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import { onAuthStateChanged } from "firebase/auth";

export default function useMainListSection() {
  const [traveLists, setTraveLists] = useState<TravelListType[]>([]);
  const [loginState, setloginState] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQueryString = searchParams.get("search");

  const moveToSignInPage = () => {
    setloginState(true);
    return navigate("/users/signin");
  };

  useLayoutEffect(() => {
    const getUserTravelLists = async () => {
      try {
        const listsArray: TravelListType[] = [];
        const user = firebaseAuth.currentUser;

        const getTravelListsByUsers = async (userUid: string) => {
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

          return setTraveLists([...listsArray]);
        };

        if (user !== null) {
          getTravelListsByUsers(user.uid);
        } else {
          onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
              getTravelListsByUsers(user.uid);
            } else {
              setloginState(false);
              throw new Error("계정 정보 없음!");
            }
          });
        }
      } catch (error) {
        const errorMessage = convertUnknownTypeErrorToStringMessage(error);
      }
    };

    getUserTravelLists();
  }, []);

  return { traveLists, searchQueryString, loginState, moveToSignInPage };
}
