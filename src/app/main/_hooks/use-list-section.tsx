import { useContext, useEffect, useState } from "react";
import TravelService from "../../../services/travel-services";
import { TravelBasicInfoType } from "../../../types/template.types";
import { AuthContext } from "../../../providers/auth-provider";
import { useRouter } from "next/navigation";

export default function useListSection() {
  const [list, setList] = useState<TravelBasicInfoType[]>();
  const router = useRouter();
  const user = useContext(AuthContext);

  // ?CONCERN: 해당 훅을 추후에 tanstack-query를 이용한 공용 훅으로 만드는게 좋을 것 같다.
  useEffect(() => {
    if (!user || !user?.uid) {
      return;
    }
    const getTravelList = async () => {
      const listState = await TravelService.getUserTravelList(user.uid);
      if (listState instanceof Error) {
        return;
      }
      setList(listState);
    };
    getTravelList();
  }, [user, user?.uid, setList]);

  return { list, router };
}
