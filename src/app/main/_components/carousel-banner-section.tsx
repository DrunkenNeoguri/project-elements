'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCarouselDotState } from '../_hooks/use-carousel-dot-state';
import { useGetCarouselBanner } from '../_hooks/use-get-carousel-banner';
import Link from 'next/link';

export default function CarouselBannerSection() {
  const [carouselRef, carouselApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const { selectedIndex, scrollSnaps } = useCarouselDotState(carouselApi);
  const { banners } = useGetCarouselBanner();

  return (
    <div className="flex flex-col box-border w-full my-2">
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex rounded-lg">
          {banners.map(({ order, imageUrl, href }) => {
            return (
              <Link
                key={order}
                className="flex-[0_0_100%] flex bg-blue-500 rounded-lg aspect-[1/0.3803] overflow-hidden justify-center items-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
                href={href}
              >
                <img src={imageUrl} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center w- full mt-2 gap-1">
        {scrollSnaps.map((_, index) => {
          return (
            <span
              key={index}
              className={
                'h-1 rounded-full transition-all ease-in-out duration-500' +
                `${index === selectedIndex ? ' w-4 bg-blue-500' : ' w-1 bg-grey'}`
              }
            />
          );
        })}
      </div>
    </div>
  );
}
