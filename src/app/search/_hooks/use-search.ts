import { useEffect, useState } from "react";
import { TravelBasicInfoType } from "../../../types/template.types";
import { useAtom } from "jotai";
import { userInfoAtom } from "../../../atoms/userInfo";
import TravelService from "../../../services/travel-services";
import { useRouter, useSearchParams } from "next/navigation";

export default function useSearch() {
  const [list, setList] = useState<TravelBasicInfoType[]>();
  const [user] = useAtom(userInfoAtom);
  const searchParams = useSearchParams();
  const router = useRouter();

  const keyword = searchParams?.get("keyword") ?? null;

  useEffect(() => {
    if (!user?.uid) {
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
  }, [user?.uid, setList, keyword]);

  return { list, router, keyword };
}
