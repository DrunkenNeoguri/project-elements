import { useEffect, useState } from "react";
import OptionService from "../../../services/option-services";
import { Banner } from "../../../types/option.types";

export function useGetCarouselBanner() {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const getMainBanners = async () => {
      const listState = await OptionService.getMainCarouselBannerList();
      setBanners(listState);
    };
    getMainBanners();
  }, []);

  return { banners };
}
