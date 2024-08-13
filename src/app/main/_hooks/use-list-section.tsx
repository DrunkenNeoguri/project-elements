import { useEffect, useState } from "react";
import TravelService from "../../../services/travel-services";
import { TravelBasicType } from "../../../types/travel.types";
import { useRouter } from "next/navigation";

export default function useListSection(uid?: string) {
  const [list, setList] = useState<TravelBasicType[]>();
  const router = useRouter();

  // ?CONCERN: 해당 훅을 추후에 tanstack-query를 이용한 공용 훅으로 만드는게 좋을 것 같다.
  useEffect(() => {
    if (!uid) {
      return;
    }
    const getTravelList = async () => {
      const listState = await TravelService.getUserTravelList(uid);
      if (listState instanceof Error) {
        return;
      }
      setList(listState);
    };
    getTravelList();
  }, [uid]);

  return { list, router };
}
