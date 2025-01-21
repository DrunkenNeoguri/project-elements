import { firestore } from "../utils/util-firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { convertUnknownTypeErrorToStringMessage } from "../utils/util-convert";
import { Banner, Notice, NoticeTitle } from "../types/option.types";

// *MEMO: 문제 없이 200일 시, 예외를 제외하고 return "OK";
class OptionService {
  static async getMainCarouselBannerList() {
    try {
      const docsState = (
        await getDocs(collection(await firestore(), "banners"))
      ).docs.map((doc) => doc.data());

      const bannerList = docsState.sort((a, b) => a.order - b.order);

      return bannerList as Banner[];
    } catch (error) {
      throw new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async getNoticeItemList() {
    try {
      const docsState = (
        await getDocs(collection(await firestore(), "notices"))
      ).docs.map((doc) => doc.data() as Notice);

      const noticeList = docsState
        .map((doc) => doc.noticeTitle)
        .sort((a, b) => Number(a.id) - Number(b.id));

      return (noticeList ?? []) as NoticeTitle[];
    } catch (error) {
      throw new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async getNoticeArticles() {
    try {
      const docsState = (
        await getDocs(collection(await firestore(), "notices"))
      ).docs.map((doc) => doc.data() as Notice);

      const noticeList = docsState.sort(
        (a, b) => Number(a.noticeTitle.id) - Number(b.noticeTitle.id)
      );

      return (noticeList ?? []) as Notice[];
    } catch (error) {
      console.log(error);
      throw new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }

  static async getNoticeOneArticle(docId: string) {
    try {
      const docState = await getDoc(doc(await firestore(), "notices", docId));
      return (docState.data() ?? null) as Notice;
    } catch (error) {
      throw new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }
}

export default OptionService;
