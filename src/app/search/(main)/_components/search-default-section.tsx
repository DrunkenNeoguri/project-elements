"use client";
import Link from "next/link";
import { ClockIcon, CloseIcon } from "../../../../assets/icons/icons";
import { useGetCarouselBanner } from "../../../main/_hooks/use-get-carousel-banner";
import { useEffect, useState } from "react";
import { useGetCurrentKeywordList } from "../_hooks/use-get-current-keyword-list";
import { Banner } from "../../../../types/option.types";

export default function SearchDefaultSection() {
  const { searchKeywordList, removeSearchKeyword, removeAllSearchKeyword } =
    useGetCurrentKeywordList();
  const { banners } = useGetCarouselBanner();
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);

  // 클라이언트에서만 랜덤 배너 선택
  useEffect(() => {
    if (banners.length > 0) {
      const randomIndex = Math.floor(Math.random() * banners.length);
      setSelectedBanner(banners[randomIndex]);
    }
  }, [banners]);

  const hasSearchKeywordInList = searchKeywordList.length !== 0;

  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col gap-3 px-4 mt-5 mb-4">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold16 mr-auto ml-0">최근 검색어</h3>
          {hasSearchKeywordInList ? (
            <button
              type="button"
              className={"font-medium12 text-invalid"}
              onClick={removeAllSearchKeyword}
            >
              전체 삭제
            </button>
          ) : null}
        </div>

        {hasSearchKeywordInList ? (
          searchKeywordList.map((keyword) => {
            return (
              <div
                key={keyword}
                className="flex justify-between items-center w-full"
              >
                <Link
                  className="flex font-medium12 text-black gap-2 justify-center items-center"
                  href={`/search?keyword=${encodeURIComponent(keyword)}`}
                >
                  <ClockIcon />
                  <span>{keyword}</span>
                </Link>
                <button
                  type="button"
                  className="font-medium12 text-black"
                  onClick={() => removeSearchKeyword(keyword)}
                >
                  <CloseIcon />
                </button>
              </div>
            );
          })
        ) : (
          <div className="flex justify-start items-start w-full h-[108px]">
            <span className="font-medium12 text-invalid">
              최근 검색어가 없습니다.
            </span>
          </div>
        )}
      </div>

      <div className="w-full h-2 bg-[#F8F8F8]" />

      {selectedBanner ? (
        <div className="mt-4 mb-auto mx-4">
          <Link
            className="flex-[0_0_100%] flex bg-blue-500 rounded-lg aspect-[1/0.3803] overflow-hidden justify-center items-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
            href={selectedBanner.href}
          >
            <img src={selectedBanner.imageUrl} alt="프로모션 배너" />
          </Link>
        </div>
      ) : null}
    </section>
  );
}

// TODO: 배너 관련 alt 메세지 값을 추가하고 반영하도록 추후 개선 진행.
