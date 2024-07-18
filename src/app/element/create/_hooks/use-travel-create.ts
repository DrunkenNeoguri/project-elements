import { useContext, useEffect, useState } from "react";
import ElementService from "../../../../services/element-service";
import { useSearchParams } from "next/navigation";
import { AuthContext } from "../../../../providers/auth-provider";
import { DocumentData } from "firebase/firestore";

export default function useTravelCreate() {
  const [travelData, setTravelData] = useState<DocumentData | undefined>({});
  const [elementList, setElementList] = useState<DocumentData | undefined>({});
  const user = useContext(AuthContext);
  const searchParams = useSearchParams();
  const listId = searchParams?.get("id");

  useEffect(() => {
    if (listId && user?.uid) {
      const getTravelAndElementList = async () => {
        try {
          // ?CONCERN: 나눠서 받도록 하는 처리가 좀 그렇다. lists 저장할 때, travel 데이터도 저장하는 게 좋을 것 같다.
          const dataState = await ElementService.getTravelElementListData(
            user.uid,
            listId
          );

          if (dataState instanceof Error) {
            // *MEMO: 추후 모달 설치하고 모달 메시지로 변경할 것
            return new Error("데이터 이슈");
          }

          setTravelData(dataState.travelData);
          setElementList(dataState.elementListData);
        } catch (error) {
          // *MEMO: 에러 메시지 출력 내용 만들 것
        }
      };
      getTravelAndElementList();
    }
  }, [listId, user?.uid]);

  return { travelData, elementList };
}
