import { ElementsBasicType } from '../types/element.types';
import { sendErrorToSentry } from '../utils/util-sentry';
import { UserInfoType } from '../types/user.types';
import { getParsedJsonData } from '../utils/util-safed-type';
import { supabase, supabaseDatabase } from '../utils/util-supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { normalizeError } from '../utils/util-convert';

export default class ElementService {
  static async getElementsData(userUid: string, id: string) {
    try {
      const elementsTable = await supabaseDatabase('elements');
      const { data: elementsData }: PostgrestSingleResponse<ElementsBasicType> = await elementsTable
        .select('*')
        .eq('id', id)
        .eq('userUid', userUid)
        .single();

      return elementsData;
    } catch (error) {
      sendErrorToSentry({ type: 'server', context: 'ElementService.getElementsData', error });
      return;
    }
  }

  static async postElementsData(userUid: string, id: string, data: ElementsBasicType) {
    try {
      const userInfo = localStorage.getItem('userInfo') ?? '';
      const parseUserInfo = getParsedJsonData<UserInfoType>(userInfo);
      const { error: transactionError } = await supabase.rpc('post_elements_data', {
        userUid,
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

      // elements > userUid > id > data // 더 쪼개야하나?
      //?CONCERN: postgreSQL로 넘어오면서 향후 어떤식으로 데이터 관리해야할지 조금 고민...
      const elementsTable = await supabaseDatabase('elements');
      const travelsTable = await supabaseDatabase('travels');
      const usersTable = await supabaseDatabase('users');

      const { error: elementsError } = await elementsTable.insert({ id, userUid, ...data });
      const { error: travelsError } = await travelsTable.insert({
        userUid,
        ...data.info,
        id,
      });
      const { error: userError } = await usersTable.update({
        ...parseUserInfo,
        recent_travel: { title: data.info.title, id: data.info.id },
      });

      if (elementsError || travelsError || userError) {
        throw new Error(elementsError?.message || travelsError?.message || userError?.message);
      }

      return 'OK';
    } catch (error) {
      throw normalizeError(error, 'ElementService.postElementsData');
    }
  }

  static async deleteElementsData(userUid: string, id: string) {
    try {
      const { error: transactionError } = await supabase.rpc('delete_elements_data', {
        userUid,
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
        .eq('userUid', userUid);
      const { error: travelsError } = await travelsTable
        .delete()
        .eq('id', id)
        .eq('userUid', userUid);

      if (elementsError || travelsError) {
        throw new Error(elementsError?.message || travelsError?.message);
      }

      return 'OK';
    } catch (error) {
      throw normalizeError(error, 'ElementService.deleteElementsData');
    }
  }
}
