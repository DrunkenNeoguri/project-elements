import { firestore } from "../utils/util-firebase";
import { collection, getDocs } from "firebase/firestore";
import { convertUnknownTypeErrorToStringMessage } from "../utils/util-convert";

// *MEMO: 문제 없이 200일 시, 예외를 제외하고 return "OK";
class OptionService {
  static async getMainCarouselBannerList() {
    try {
      const docsState = (
        await getDocs(collection(await firestore(), "banners"))
      ).docs.map((doc) => doc.data());

      const bannerList = docsState.sort((a, b) => a.order - b.order);

      return bannerList as { href: string; imageUrl: string; order: number }[];
    } catch (error) {
      throw new Error(convertUnknownTypeErrorToStringMessage(error));
    }
  }
}

export default OptionService;
