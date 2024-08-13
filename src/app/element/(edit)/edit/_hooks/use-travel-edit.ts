import { useContext, useEffect } from "react";
import ElementService from "../../../../../services/element-service";
import { useSearchParams } from "next/navigation";
import { AuthContext } from "../../../../../providers/auth-provider";
import { ElementsContext } from "../../../../../providers/elements-provider";

export default function useTravelEdit() {
  const { dispatch } = useContext(ElementsContext);
  const user = useContext(AuthContext);
  const searchParams = useSearchParams();
  const listId = searchParams?.get("id");

  useEffect(() => {
    if (listId && user?.uid) {
      const getElementsData = async () => {
        try {
          const dataState = await ElementService.getElementsData(
            user.uid,
            listId
          );

          if (dataState instanceof Error || !dataState) {
            return new Error("잘못된 데이터입니다.");
          }

          dispatch({
            type: "setData",
            target: {
              info: dataState.info,
              elements: dataState.elements && Object.values(dataState.elements),
            },
          });
        } catch (error) {
          // *MEMO: 에러 메시지 출력 내용 만들 것
        }
      };
      getElementsData();
    }
  }, [listId, user?.uid, dispatch]);
}
