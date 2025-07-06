import { collection, doc, getDoc, runTransaction } from 'firebase/firestore';
import { firestore } from '../utils/util-firebase';
import { convertUnknownTypeErrorToStringMessage } from '../utils/util-convert';
import { ElementsBasicType } from '../types/element.types';
import { sendErrorToSentry } from '../utils/util-sentry';
import { UserInfoType } from '../types/user.types';
import { getParsedJsonData } from '../utils/util-safed-type';

export default class ElementService {
  static async getElementsData(userUid: string, id: string) {
    try {
      const elementsState = await getDoc(
        doc(collection(await firestore(), `elements`, userUid, 'docs'), id),
      );

      if (elementsState instanceof Error) {
        // TODO: 에러 메시지 추후 추가
        sendErrorToSentry({
          type: 'server',
          context: 'ElementService.getElementsData',
          error: elementsState,
        });
        return;
      }

      return elementsState.data();
    } catch (error) {
      return new Error(
        convertUnknownTypeErrorToStringMessage(error, 'ElementService.getElementsData'),
      );
    }
  }

  static async postElementsData(userUid: string, id: string, data: ElementsBasicType) {
    try {
      const userInfo = localStorage.getItem('userInfo') ?? '';
      const parseUserInfo = getParsedJsonData<UserInfoType>(userInfo);

      await runTransaction(await firestore(), async transaction => {
        await transaction.set(
          doc(collection(await firestore(), `elements`, userUid, 'docs'), id),
          data,
        );

        await transaction.set(
          doc(collection(await firestore(), `travels`, userUid, 'docs'), id),
          data.info,
        );

        await transaction.set(doc(await firestore(), `users`, userUid), {
          ...parseUserInfo,
          recentTravel: { title: data.info.title, id: data.info.id },
        });
      });

      return 'OK';
    } catch (error) {
      return new Error(
        convertUnknownTypeErrorToStringMessage(error, 'ElementService.postElementsData'),
      );
    }
  }

  static async deleteElementsData(userUid: string, id: string) {
    try {
      await runTransaction(await firestore(), async transaction => {
        await transaction.delete(
          doc(collection(await firestore(), `elements`, userUid, 'docs'), id),
        );

        await transaction.delete(
          doc(collection(await firestore(), `travels`, userUid, 'docs'), id),
        );
      });

      return 'OK';
    } catch (error) {
      return new Error(
        convertUnknownTypeErrorToStringMessage(error, 'ElementService.deleteElementsData'),
      );
    }
  }
}
