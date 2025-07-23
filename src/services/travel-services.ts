import { TravelBasicType } from '../types/travel.types';
import { normalizeError } from '../utils/util-convert';
import { basicTemplate, domesticTemplate, foreignTemplate } from '../utils/util-template';
import { UserInfoType } from '../types/user.types';
import { getParsedJsonData, getTypedObjectData } from '../utils/util-safed-type';
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
        throw normalizeError(travelError, 'TravelService.getUserTravelList');
      }

      travelsData.forEach(doc => {
        const data = getTypedObjectData<TravelBasicType>(doc);
        if (data) {
          const { travelType, title, departure_at, travelPeriod, destination, id } = data;
          travelList.push({
            travelType,
            title,
            departure_at,
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
      throw normalizeError(error, 'TravelService.getUserTravelList');
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
          recent_travel: { title: formData.title, id: formData.id },
          upcoming_travel: {
            title: formData.title,
            id: formData.id,
            departure_at: formData.departure_at, // Ensure the date is in the correct format
          },
        },
      });

      if (transactionError) {
        throw normalizeError(transactionError, 'TravelService.postCreateNewTravel');
      }

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
          if (!parseUserInfo.upcoming_travel) {
            return {
              title: formData.title,
              id: formData.id,
              departure_at: formData.departure_at,
            };
          } else if (
            new Date(parseUserInfo.upcoming_travel.departure_at).getTime() >
            new Date(formData.departure_at).getTime()
          ) {
            return {
              title: formData.title,
              id: formData.id,
              departure_at: formData.departure_at,
            };
          }
          return { ...parseUserInfo.upcoming_travel };
        }
      };

      const renewalUserData = {
        ...parseUserInfo,
        recent_travel: { title: formData.title, id: formData.id },
        upcoming_travel: setUpcomingTravel(),
      };

      const { error: userError } = await usersTable.update(renewalUserData).eq('userUid', userUid);

      if (travelError || elementsError || userError) {
        throw normalizeError(
          travelError || elementsError || userError,
          'TravelService.postCreateNewTravel',
        );
      }
    } catch (error) {
      throw normalizeError(error, 'TravelService.postCreateNewTravel');
    }
  }

  static async renewalUpcomingTravelInUserData(userId: string) {
    try {
      const travelsTable = await supabaseDatabase('travels');
      const { data: travelsData, error: travelsError } = await travelsTable
        .select('*')
        .eq('id', userId)
        .order('departure_at', { ascending: true });

      if (travelsError) {
        throw normalizeError(travelsError, 'TravelService.renewalUpcomingTravelInUserData');
      }

      const upcomingTravel = travelsData
        .map(doc => getTypedObjectData<TravelBasicType>(doc))
        .filter((data): data is TravelBasicType => !!data)
        .map(({ travelType, title, departure_at, travelPeriod, destination, id }) => ({
          travelType,
          title,
          departure_at,
          travelPeriod,
          destination,
          id,
        }))
        .find(data => new Date(data.departure_at).getTime() - Date.now() >= 0);

      return upcomingTravel;
    } catch (error) {
      throw normalizeError(error, 'TravelService.renewalUpcomingTravelInUserData');
    }
  }
}

export default TravelService;
