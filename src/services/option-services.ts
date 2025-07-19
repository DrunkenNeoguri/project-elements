import { convertUnknownTypeErrorToStringMessage } from '../utils/util-convert';
import { Banner, Notice } from '../types/option.types';
import { getTypedDocData } from '../utils/util-safed-type';
import { supabaseDatabase } from '../utils/util-supabase';
import { PostgrestResponse } from '@supabase/supabase-js';

// *MEMO: 문제 없이 200일 시, 예외를 제외하고 return "OK";
class OptionService {
  static async getMainCarouselBannerList() {
    try {
      const docsState = await supabaseDatabase('banners');
      const { data: bannerList, error: bannerError }: PostgrestResponse<Banner[]> = await docsState
        .select('*')
        .order('order', { ascending: true });

      //* MEMO: 에러는 나중에 다시 수정합시다.
      if (bannerError) {
        throw new Error(
          convertUnknownTypeErrorToStringMessage(
            bannerError,
            'OptionService.getMainCarouselBannerList',
          ),
        );
      }

      return bannerList;
    } catch (error) {
      throw new Error(
        convertUnknownTypeErrorToStringMessage(error, 'OptionService.getMainCarouselBannerList'),
      );
    }
  }

  private static async getNoticesBase() {
    const noticesTable = await supabaseDatabase('notices');
    const { data: noticesList, error: noticesError }: PostgrestResponse<Notice[]> =
      await noticesTable.select('*').order('createdAt', { ascending: false });

    if (noticesError) {
      throw new Error(
        convertUnknownTypeErrorToStringMessage(noticesError, 'OptionService.getNoticesBase'),
      );
    }

    return noticesList;
  }

  static async getNoticeItemList() {
    try {
      const noticeList = await OptionService.getNoticesBase();
      return noticeList ?? [];
    } catch (error) {
      throw new Error(
        convertUnknownTypeErrorToStringMessage(error, 'OptionService.getNoticeItemList'),
      );
    }
  }

  static async getNoticeArticles() {
    try {
      const noticeList = await OptionService.getNoticesBase();
      if (!noticeList || noticeList.length === 0) {
        return [];
      }
      return noticeList ?? [];
    } catch (error) {
      throw new Error(
        convertUnknownTypeErrorToStringMessage(error, 'OptionService.getNoticeArticles'),
      );
    }
  }

  static async getNoticeOneArticle(docId: string) {
    try {
      const noticeState = await supabaseDatabase('notices');
      const { data: noticeData, error: noticeError }: PostgrestResponse<Notice> = await noticeState
        .select('*')
        .eq('id', docId)
        .single();

      if (noticeError) {
        throw new Error(
          convertUnknownTypeErrorToStringMessage(noticeError, 'OptionService.getNoticeOneArticle'),
        );
      }

      return getTypedDocData<Notice>(noticeData) ?? null;
    } catch (error) {
      throw new Error(
        convertUnknownTypeErrorToStringMessage(error, 'OptionService.getNoticeOneArticle'),
      );
    }
  }
}

export default OptionService;
