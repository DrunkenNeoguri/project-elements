import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseAuth, firestore } from "../../../utils/util-firebase";
import { TravelListType } from "../../../common/types/template";
import { useNavigate, useSearchParams } from "react-router-dom";
// import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import { onAuthStateChanged } from "firebase/auth";

export default function useMainListSection() {
  const [traveLists, setTraveLists] = useState<TravelListType[] | undefined>();
  const [modalState, setModalState] = useState({
    state: false,
    title: "",
    context: "",
    buttonText: "",
    closeFunc: () => {},
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQueryString = searchParams.get("search");

  useEffect(() => {
    const getUserTravelLists = async () => {
      const clearModalState = () => {
        return setModalState({
          state: false,
          title: "",
          context: "",
          buttonText: "",
          closeFunc: () => {},
        });
      };

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
          return getTravelListsByUsers(user.uid);
        } else {
          return onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
              getTravelListsByUsers(user.uid);
            } else {
              return setModalState({
                state: true,
                title: "로그인 세션 만료",
                context: `장시간 사이트 내에 활동이 없어\n로그인 상태가 해제되었습니다.`,
                buttonText: "로그인 화면으로 돌아가기",
                closeFunc: () => {
                  clearModalState();
                  return navigate("/users/signin");
                },
              });
            }
          });
        }
      } catch (error) {
        // const errorMessage = convertUnknownTypeErrorToStringMessage(error);
        return setModalState({
          state: true,
          title: "데이터 받기 오류",
          context: `죄송합니다, 데이터를 받아오지 못했습니다.\n새로고침을 시도하시거나 다시 로그인해주세요.`,
          buttonText: "알겠습니다.",
          closeFunc: () => {
            return clearModalState();
          },
        });
      }
    };

    getUserTravelLists();
  }, [navigate]);

  return { traveLists, searchQueryString, modalState };
}
