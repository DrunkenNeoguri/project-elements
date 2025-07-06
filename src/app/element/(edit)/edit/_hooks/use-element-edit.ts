import { useContext, useEffect } from 'react';
import ElementService from '../../../../../services/element-service';
import { useSearchParams } from 'next/navigation';
import { AuthContext } from '../../../../../providers/auth-provider';
import { ElementsContext } from '../../../../../providers/elements-provider';
import { sendErrorToSentry } from '../../../../../utils/util-sentry';
import { CategoryBasicType, ElementsBasicType } from '../../../../../types/element.types';

export default function useElementEdit() {
  const { dispatch } = useContext(ElementsContext);
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

          dispatch({
            type: 'setData',
            target: {
              info: dataState.info,
              elements: Object.values(dataState.elements) as CategoryBasicType[],
            },
          });
        } catch (error) {
          sendErrorToSentry({
            type: 'client',
            context: 'useElementEdit.getElementsData',
            error: error as Error,
          });
        }
      };
      getElementsData();
    }
  }, [listId, user?.uid, dispatch]);
}
