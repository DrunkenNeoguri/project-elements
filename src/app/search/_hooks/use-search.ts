import { useContext, useEffect, useState } from "react";
import { TravelBasicType } from "../../../types/travel.types";
import TravelService from "../../../services/travel-services";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthContext } from "../../../providers/auth-provider";

export default function useSearch() {
  const [list, setList] = useState<TravelBasicType[]>();
  const user = useContext(AuthContext);
  const searchParams = useSearchParams();
  const router = useRouter();

  const keyword = searchParams?.get("keyword") ?? null;

  useEffect(() => {
    if (!user || !user?.uid) {
      return;
    }
    const getTravelList = async () => {
      const listState = await TravelService.getUserTravelList(
        user.uid,
        keyword
      );
      if (listState instanceof Error) {
        return;
      }
      setList(listState);
    };
    getTravelList();
  }, [user, user?.uid, setList, keyword]);

  return { list, router, keyword };
}
