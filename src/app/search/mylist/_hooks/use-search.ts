import { useContext, useEffect, useState } from "react";
import { TravelBasicType } from "../../../../types/travel.types";
import TravelService from "../../../../services/travel-services";
import { AuthContext } from "../../../../providers/auth-provider";

export default function useSearch() {
  const [list, setList] = useState<TravelBasicType[]>();
  const user = useContext(AuthContext);

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

  return { list };
}
