import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { userInfoAtom } from "../../../atoms/userInfo";
import TravelService from "../../../services/travel-services";
import { TravelBasicInfoType } from "../../../types/template.types";

export default function useListSection() {
  const [list, setList] = useState<TravelBasicInfoType[]>();
  const [user] = useAtom(userInfoAtom);

  // ? Think: 해당 훅을 추후에 tanstack-query를 이용한 공용 훅으로 만드는게 좋을 것 같다.
  useEffect(() => {
    if (!user?.uid) {
      return;
    }
    const getTravelList = async () => {
      const listState = await TravelService.getUserTravelLists(user.uid);
      if (listState instanceof Error) {
        return;
      }
      setList(listState);
    };
    getTravelList();
  }, [user?.uid, setList]);

  return { list };
}