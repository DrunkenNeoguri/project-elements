import { ElementsBasicType } from '../types/element.types';
import { sendErrorToSentry } from '../utils/util-sentry';
import { UserInfoType } from '../types/user.types';
import { getParsedJsonData } from '../utils/util-safed-type';
import { supabase, supabaseDatabase } from '../utils/util-supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { normalizeError } from '../utils/util-convert';
import snakecaseKeys from 'snakecase-keys';

//?CONCERN: RDB (supabase database - postgreSQL)로 변경하면서 구조를 어떻게 바꿀지 고민해봐야 함...
export default class ElementService {
  static async getElementsData(userId: string, id: string) {
    try {
      const elementsTable = await supabaseDatabase('elements');
      const { data: elementsData }: PostgrestSingleResponse<ElementsBasicType> = await elementsTable
        .select('*')
        .eq('id', id)
        .eq('userId', userId)
        .single();

      return elementsData;
    } catch (error) {
      sendErrorToSentry({ type: 'server', context: 'ElementService.getElementsData', error });
      return;
    }
  }

  static async postElementsData(userId: string, id: string, data: ElementsBasicType) {
    try {
      const userInfo = localStorage.getItem('userInfo') ?? '';
      const parseUserInfo = getParsedJsonData<UserInfoType>(userInfo);
      const { error: transactionError } = await supabase.rpc('post_elements_data', {
        userId,
        id,
        data: {
          ...data,
          info: {
            ...data.info,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          },
        },
      });

      if (transactionError) {
        throw transactionError;
      }

      // elements > userId > id > data // 더 쪼개야하나?
      //?CONCERN: postgreSQL로 넘어오면서 향후 어떤식으로 데이터 관리해야할지 조금 고민...
      const elementsTable = await supabaseDatabase('elements');
      const travelsTable = await supabaseDatabase('travels');
      const usersTable = await supabaseDatabase('users');

      const { error: elementsError } = await elementsTable.insert(
        snakecaseKeys({ id, userId, ...data }),
      );
      const { error: travelsError } = await travelsTable.insert(
        snakecaseKeys({
          userId,
          ...data.info,
          id,
        }),
      );
      const { error: userError } = await usersTable.update({
        ...parseUserInfo,
        recentTravel: { title: data.info.title, id: data.info.id },
      });

      if (elementsError || travelsError || userError) {
        throw new Error(elementsError?.message || travelsError?.message || userError?.message);
      }

      return 'OK';
    } catch (error) {
      throw normalizeError(error, 'ElementService.postElementsData');
    }
  }

  static async deleteElementsData(userId: string, id: string) {
    try {
      const { error: transactionError } = await supabase.rpc('delete_elements_data', {
        userId,
        id,
      });

      if (transactionError) {
        throw transactionError;
      }

      const elementsTable = await supabaseDatabase('elements');
      const travelsTable = await supabaseDatabase('travels');

      const { error: elementsError } = await elementsTable
        .delete()
        .eq('id', id)
        .eq('userId', userId);
      const { error: travelsError } = await travelsTable.delete().eq('id', id).eq('userId', userId);

      if (elementsError || travelsError) {
        throw new Error(elementsError?.message || travelsError?.message);
      }

      return 'OK';
    } catch (error) {
      throw normalizeError(error, 'ElementService.deleteElementsData');
    }
  }
}
