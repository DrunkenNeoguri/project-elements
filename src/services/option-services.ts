import { firestore } from '../utils/util-firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { convertUnknownTypeErrorToStringMessage } from '../utils/util-convert';
import { Banner, Notice } from '../types/option.types';
import { getTypedDocData } from '../utils/util-safed-type';

// *MEMO: 문제 없이 200일 시, 예외를 제외하고 return "OK";
class OptionService {
  static async getMainCarouselBannerList() {
    try {
      const docsState = (await getDocs(collection(await firestore(), 'banners'))).docs.flatMap(
        doc => {
          const bannerData = getTypedDocData<Banner>(doc);
          return bannerData ? [bannerData] : [];
        },
      );

      const bannerList = docsState.sort((a, b) => a.order - b.order);

      return bannerList;
    } catch (error) {
      throw new Error(
        convertUnknownTypeErrorToStringMessage(error, 'OptionService.getMainCarouselBannerList'),
      );
    }
  }

  private static async getNoticesBase() {
    const docsState = (await getDocs(collection(await firestore(), 'notices'))).docs.flatMap(
      doc => {
        const noticeData = getTypedDocData<Notice>(doc);
        return noticeData ? [noticeData] : [];
      },
    );

    return docsState.sort((a, b) => Number(a.id) - Number(b.id));
  }

  static async getNoticeItemList() {
    try {
      const noticeList = await this.getNoticesBase();
      return noticeList ?? [];
    } catch (error) {
      throw new Error(
        convertUnknownTypeErrorToStringMessage(error, 'OptionService.getNoticeItemList'),
      );
    }
  }

  static async getNoticeArticles() {
    try {
      const noticeList = await this.getNoticesBase();
      return noticeList ?? [];
    } catch (error) {
      throw new Error(
        convertUnknownTypeErrorToStringMessage(error, 'OptionService.getNoticeArticles'),
      );
    }
  }

  static async getNoticeOneArticle(docId: string) {
    try {
      const docState = await getDoc(doc(await firestore(), 'notices', docId));
      return getTypedDocData<Notice>(docState) ?? null;
    } catch (error) {
      throw new Error(
        convertUnknownTypeErrorToStringMessage(error, 'OptionService.getNoticeOneArticle'),
      );
    }
  }
}

export default OptionService;
