import { useContext, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TravelBasicType } from '../types/travel.types';
import { AuthContext } from '../providers/auth-provider';
import TravelService from '../services/travel-services';

export default function useGetUserTravelList() {
  const [list, setList] = useState<TravelBasicType[]>();
  const user = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  const keyword = searchParams?.get('keyword') ?? undefined;

  useEffect(() => {
    if (!user || !user?.uid) {
      return;
    }
    const getTravelList = async () => {
      const listState = await TravelService.getUserTravelList(user.uid, keyword);
      if (listState instanceof Error) {
        return;
      }
      setList(listState);
    };
    getTravelList();
  }, [user, user?.uid, setList, keyword]);

  return { list, keyword, router };
}
