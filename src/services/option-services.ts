import { normalizeError } from '../utils/util-convert';
import { Banner, Notice } from '../types/option.types';
import { getTypedObjectData } from '../utils/util-safed-type';
import { supabaseDatabase } from '../utils/util-supabase';
import { PostgrestResponse } from '@supabase/supabase-js';
import camelcaseKeys from 'camelcase-keys';

// *MEMO: 문제 없이 200일 시, 예외를 제외하고 return "OK";
class OptionService {
  static async getMainCarouselBannerList() {
    try {
      const docsState = await supabaseDatabase('banners');
      const { data: bannerList, error: bannerError }: PostgrestResponse<Banner[]> = await docsState
        .select('*')
        .order('order', { ascending: true });

      if (bannerError) {
        throw normalizeError(bannerError, 'OptionService.getMainCarouselBannerList');
      }

      return bannerList.map(banner => camelcaseKeys(banner));
    } catch (error) {
      throw normalizeError(error, 'OptionService.getMainCarouselBannerList');
    }
  }

  private static async getNoticesBase() {
    const noticesTable = await supabaseDatabase('notices');
    const { data: noticesList, error: noticesError }: PostgrestResponse<Notice> = await noticesTable
      .select('*')
      .order('createdAt', { ascending: false });

    if (noticesError) {
      throw normalizeError(noticesError, 'OptionService.getNoticesBase');
    }

    return noticesList.map(notice => camelcaseKeys(notice));
  }

  // ?CONCERN:아래의 getNoticeItemList와 getNoticeArticles는 중복 코드라 차후 다시 코드 확인 필요.
  static async getNoticeItemList() {
    try {
      const noticeList = await OptionService.getNoticesBase();
      return noticeList.map(notice => camelcaseKeys(notice)) ?? [];
    } catch (error) {
      throw normalizeError(error, 'OptionService.getNoticeItemList');
    }
  }

  static async getNoticeArticles() {
    try {
      const noticeList = await OptionService.getNoticesBase();
      if (!noticeList || noticeList.length === 0) {
        return [];
      }
      return noticeList.map(notice => camelcaseKeys(notice)) ?? [];
    } catch (error) {
      throw normalizeError(error, 'OptionService.getNoticeArticles');
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
        throw normalizeError(noticeError, 'OptionService.getNoticeOneArticle');
      }

      return getTypedObjectData<Notice>(camelcaseKeys(noticeData)) ?? null;
    } catch (error) {
      throw normalizeError(error, 'OptionService.getNoticeOneArticle');
    }
  }
}

export default OptionService;
