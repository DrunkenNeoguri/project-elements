import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import ElementService from '../../../../services/element-service';
import { AuthContext } from '../../../../providers/auth-provider';
import { TravelBasicType } from '../../../../types/travel.types';
import { CategoryBasicType, ElementsBasicType } from '../../../../types/element.types';
import { sendErrorToSentry } from '../../../../utils/util-sentry';

export default function useElementMain() {
  const [travelInfo, setTravelInfo] = useState<TravelBasicType>();
  const [elements, setElements] = useState<CategoryBasicType[]>();
  const user = useContext(AuthContext);
  const searchParams = useSearchParams();
  const listId = searchParams?.get('id');

  useEffect(() => {
    if (listId && user?.uid) {
      const getElementsData = async () => {
        try {
          const dataState = (await ElementService.getElementsData(
            user.uid,
            listId,
          )) as ElementsBasicType;

          if (dataState instanceof Error || !dataState) {
            return new Error('잘못된 데이터입니다.');
          }
          setTravelInfo(dataState.info as TravelBasicType);
          setElements(Object.values(dataState.elements) as CategoryBasicType[]);
        } catch (error) {
          sendErrorToSentry({
            type: 'client',
            context: 'useElementMain.getElementsData',
            error: error as Error,
          });
        }
      };
      getElementsData();
    }
  }, [listId, user?.uid]);

  useEffect(() => {
    if (!user || !elements || !travelInfo) {
      return;
    }

    const saveDraftToDatabase = () => {
      return setTimeout(async () => {
        await ElementService.postElementsData(user.uid, travelInfo?.id, {
          info: travelInfo,
          elements: elements,
        });
      }, 5000);
    };
    saveDraftToDatabase();

    return () => clearTimeout(saveDraftToDatabase());
  }, [user, elements, travelInfo]);

  return { elements, setElements, travelInfo };
}
