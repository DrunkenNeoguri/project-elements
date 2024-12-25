import { useEffect, useState } from "react";
import OptionService from "../../../services/option-services";

export function useGetCarouselBanner() {
  const [banners, setBanners] = useState<
    { href: string; imageUrl: string; order: number }[]
  >([]);

  useEffect(() => {
    const getMainBanners = async () => {
      const listState = await OptionService.getMainCarouselBannerList();
      setBanners(listState);
    };
    getMainBanners();
  }, []);

  return { banners };
}
