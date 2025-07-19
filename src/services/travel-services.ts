import { TravelBasicType } from '../types/travel.types';
import { convertUnknownTypeErrorToStringMessage } from '../utils/util-convert';
import { basicTemplate, domesticTemplate, foreignTemplate } from '../utils/util-template';
import { UserInfoType } from '../types/user.types';
import { getParsedJsonData, getTypedDocData } from '../utils/util-safed-type';
import { supabase, supabaseDatabase } from '../utils/util-supabase';

// *MEMO: PostgreSQL을 쓰면서 테이블 구조를 전반적으로 많이 변경해야겠다는 생각이 듦.

class TravelService {
  static async getUserTravelList(userUid: string, keyword?: string) {
    try {
      let travelList: TravelBasicType[] = [];
      const travelsTable = await supabaseDatabase('travels');
      //!CHECK: 이 구조가 적합한지 마이그레이션 이후 재확인!
      const { data: travelsData, error: travelError } = await travelsTable
        .select('*')
        .eq('userUid', userUid)
        .order('departureAt', { ascending: true });

      if (travelError) {
        throw new Error(
          convertUnknownTypeErrorToStringMessage(travelError, 'TravelService.getUserTravelList'),
        );
      }

      if (!travelsData || travelsData.length === 0) {
        return [];
      }

      travelsData.forEach(doc => {
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

      const { error: transactionError } = await supabase.rpc('create_new_travel', {
        userUid,
        travelId: formData.id,
        travelData: {
          ...formData,
          elements: { info: { ...formData }, elements: { ...template() } },
        },
        userData: {
          ...parseUserInfo,
          recentTravel: { title: formData.title, id: formData.id },
          upcomingTravel: {
            title: formData.title,
            id: formData.id,
            departureAt: formData.departureAt,
          },
        },
      });

      if (transactionError) {
        throw new Error(
          convertUnknownTypeErrorToStringMessage(
            transactionError,
            'TravelService.postCreateNewTravel',
          ),
        );
      }

      // (고민)

      const travelsTable = await supabaseDatabase('travels');
      const elementsTable = await supabaseDatabase('elements');
      const usersTable = await supabaseDatabase('users');

      const { error: travelError } = await travelsTable.insert({
        ...formData,
        userUid,
      });

      const { error: elementsError } = await elementsTable.insert({
        info: { ...formData },
        elements: { ...template() },
      });

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

      const { error: userError } = await usersTable.update(renewalUserData).eq('userUid', userUid);

      if (travelError || elementsError || userError) {
        throw new Error(
          convertUnknownTypeErrorToStringMessage(
            travelError || elementsError || userError,
            'TravelService.postCreateNewTravel',
          ),
        );
      }

      await localStorage.setItem('userInfo', JSON.stringify(renewalUserData));

      return 'OK';
    } catch (error) {
      return new Error(
        convertUnknownTypeErrorToStringMessage(error, 'TravelService.postCreateNewTravel'),
      );
    }
  }

  //?CONCERN: postgreSQL인데 이거 하나만 뽑을 수 있는 게 있지 않을까?
  static async renewalUpcomingTravelInUserData(userUid: string) {
    try {
      const travelsTable = await supabaseDatabase('travels');
      const { data: travelsData, error: travelsError } = await travelsTable
        .select('*')
        .eq('userUid', userUid)
        .order('departureAt', { ascending: true });

      if (travelsError) {
        throw new Error(
          convertUnknownTypeErrorToStringMessage(
            travelsError,
            'TravelService.renewalUpcomingTravelInUserData',
          ),
        );
      }

      const upcomingTravel = travelsData
        .map(doc => getTypedDocData<TravelBasicType>(doc))
        .filter((data): data is TravelBasicType => !!data)
        .map(({ travelType, title, departureAt, travelPeriod, destination, id }) => ({
          travelType,
          title,
          departureAt,
          travelPeriod,
          destination,
          id,
        }))
        .find(data => new Date(data.departureAt).getTime() - Date.now() >= 0);

      return upcomingTravel;
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
