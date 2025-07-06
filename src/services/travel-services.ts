import { collection, doc, getDocs, runTransaction } from 'firebase/firestore';
import { firestore } from '../utils/util-firebase';
import { TravelBasicType } from '../types/travel.types';
import { convertUnknownTypeErrorToStringMessage } from '../utils/util-convert';
import { basicTemplate, domesticTemplate, foreignTemplate } from '../utils/util-template';
import { UserInfoType } from '../types/user.types';
import { getParsedJsonData, getTypedDocData } from '../utils/util-safed-type';

class TravelService {
  static async getUserTravelList(userUid: string, keyword?: string) {
    try {
      let travelList: TravelBasicType[] = [];
      const docsState = await getDocs(collection(await firestore(), `travels`, userUid, 'docs'));

      docsState.forEach(doc => {
        const data = getTypedDocData<TravelBasicType>(doc);
        if (data) {
          const { travelType, title, departureAt, travelPeriod, destination, id } = data;
          travelList.push({
            travelType,
            title,
            departureAt,
            travelPeriod,
            destination,
            id,
          });
        }
      });

      if (keyword) {
        travelList = travelList.filter(data => {
          return data.title.includes(keyword) || data.destination.includes(keyword);
        });

        travelList.sort(
          (a, b) => new Date(a.departureAt).getTime() - new Date(b.departureAt).getTime(),
        );
      }
      return travelList;
    } catch (error) {
      return new Error(
        convertUnknownTypeErrorToStringMessage(error, 'TravelService.getUserTravelList'),
      );
    }
  }

  static async postCreateNewTravel(
    userUid: string,
    useTemplate: boolean,
    formData: TravelBasicType,
  ) {
    try {
      const template = () => {
        if (!useTemplate) {
          return basicTemplate;
        }
        if (formData.travelType === 'domestic') {
          return domesticTemplate;
        }
        if (formData.travelType === 'foreign') {
          return foreignTemplate;
        }
      };

      const userInfo = localStorage.getItem('userInfo') ?? '';
      const parseUserInfo = getParsedJsonData<UserInfoType>(userInfo);

      await runTransaction(await firestore(), async transaction => {
        await transaction.set(
          doc(collection(await firestore(), `travels`, userUid, 'docs'), formData.id),
          { ...formData },
        );

        await transaction.set(
          doc(collection(await firestore(), `elements`, userUid, 'docs'), formData.id),
          { info: { ...formData }, elements: { ...template() } },
        );

        const setUpcomingTravel = () => {
          if (parseUserInfo) {
            if (!parseUserInfo.upcomingTravel) {
              return {
                title: formData.title,
                id: formData.id,
                departureAt: formData.departureAt,
              };
            } else if (
              new Date(parseUserInfo.upcomingTravel.departureAt).getTime() >
              new Date(formData.departureAt).getTime()
            ) {
              return {
                title: formData.title,
                id: formData.id,
                departureAt: formData.departureAt,
              };
            }
            return { ...parseUserInfo.upcomingTravel };
          }
        };

        const renewalUserData = {
          ...parseUserInfo,
          recentTravel: { title: formData.title, id: formData.id },
          upcomingTravel: setUpcomingTravel(),
        };

        await transaction.set(doc(await firestore(), `users`, userUid), renewalUserData);

        await localStorage.setItem('userInfo', JSON.stringify(renewalUserData));
      });

      return 'OK';
    } catch (error) {
      return new Error(
        convertUnknownTypeErrorToStringMessage(error, 'TravelService.postCreateNewTravel'),
      );
    }
  }
  static async renewalUpcomingTravelInUserData(userUid: string) {
    try {
      let travelList: TravelBasicType[] = [];
      const docsState = await getDocs(collection(await firestore(), `travels`, userUid, 'docs'));

      docsState.forEach(doc => {
        const data = getTypedDocData<TravelBasicType>(doc);
        if (data) {
          const { travelType, title, departureAt, travelPeriod, destination, id } = data;
          travelList.push({
            travelType,
            title,
            departureAt,
            travelPeriod,
            destination,
            id,
          });
        }
      });

      travelList = travelList.filter(
        data => new Date(data.departureAt).getTime() - Date.now() >= 0,
      );

      travelList.sort(
        (a, b) => new Date(a.departureAt).getTime() - new Date(b.departureAt).getTime(),
      );

      return travelList[0];
    } catch (error) {
      throw new Error(
        convertUnknownTypeErrorToStringMessage(
          error,
          'TravelService.renewalUpcomingTravelInUserData',
        ),
      );
    }
  }
}

export default TravelService;
