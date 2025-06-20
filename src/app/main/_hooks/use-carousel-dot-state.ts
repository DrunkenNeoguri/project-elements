import { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

type UseDotStateType = {
  selectedIndex: number;
  scrollSnaps: number[];
};

export const useCarouselDotState = (
  carouselAPI: EmblaCarouselType | undefined,
): UseDotStateType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((carouselAPI: EmblaCarouselType) => {
    setScrollSnaps(carouselAPI.scrollSnapList());
  }, []);

  const onSelect = useCallback((carouselAPI: EmblaCarouselType) => {
    setSelectedIndex(carouselAPI.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!carouselAPI) {
      return;
    }

    onInit(carouselAPI);
    onSelect(carouselAPI);
    carouselAPI.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [carouselAPI, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
  };
};
