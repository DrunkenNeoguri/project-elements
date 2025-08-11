import { TravelBasicType } from '../types/travel.types';
import { normalizeError } from '../utils/util-convert';
import { basicTemplate, domesticTemplate, foreignTemplate } from '../utils/util-template';
import { getTypedObjectData } from '../utils/util-safed-type';
import { supabase, supabaseDatabase } from '../utils/util-supabase';
import snakecaseKeys from 'snakecase-keys';
import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';
import { PostgrestError } from '@supabase/supabase-js';

class TravelService {
  static async getUserTravelList(userId: string, keyword?: string) {
    try {
      let query = supabaseDatabase('travels')
        .select('*')
        .eq('user_id', userId)
        .order('departure_at', { ascending: true });

      if (keyword) {
        query = query.or(`destination.ilike.%${keyword}%,title.ilike.%${keyword}%`);
      }

      const { data: travelsData, error: travelError } = await query;

      if (travelError) {
        throw normalizeError(travelError, 'TravelService.getUserTravelList');
      }

      return (travelsData ?? []).map(data =>
        getTypedObjectData<TravelBasicType>(camelcaseKeys(data)),
      );
    } catch (error) {
      throw normalizeError(error, 'TravelService.getUserTravelList');
    }
  }

  static async postCreateNewTravel(userId: string, formData: TravelBasicType) {
    try {
      const template = () => {
        if (formData.travelType === 'domestic') {
          return domesticTemplate;
        }
        if (formData.travelType === 'foreign') {
          return foreignTemplate;
        }
        return basicTemplate;
      };

      const { data, error: transactionError } = await supabase.rpc<string, PostgrestError>(
        'create_new_travel',
        snakecaseKeys({
          user_id: userId,
          travelData: {
            ...formData,
            departureAt: dayjs(formData.departureAt).toISOString(),
            elements: template(),
          },
        }),
      );

      if (transactionError) {
        throw normalizeError(transactionError, 'TravelService.postCreateNewTravel');
      }

      return data;
    } catch (error) {
      throw normalizeError(error, 'TravelService.postCreateNewTravel');
    }
  }

  static async renewalUpcomingTravelInUserData(userId: string) {
    try {
      const travelsTable = await supabaseDatabase('travels');
      const { data: travelsData, error: travelsError } = await travelsTable
        .select('*')
        .eq('user_id', userId)
        .order('departure_at', { ascending: true });

      if (travelsError) {
        throw normalizeError(travelsError, 'TravelService.renewalUpcomingTravelInUserData');
      }

      const upcomingTravel = travelsData
        .map(data => getTypedObjectData<TravelBasicType>(camelcaseKeys(data)))
        .filter((data): data is TravelBasicType => !!data)
        .find(data => dayjs(data.departureAt).diff(dayjs()) >= 0);

      return upcomingTravel?.travelId;
    } catch (error) {
      throw normalizeError(error, 'TravelService.renewalUpcomingTravelInUserData');
    }
  }
}

export default TravelService;
