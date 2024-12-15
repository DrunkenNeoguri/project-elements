"use client";
import { RecentlyIcon, UpcomingIcon } from "../../../assets/icons/icons";

export default function ButtonSection() {
  return (
    <section className="flex gap-4 w-full">
      <div className="flex flex-col w-1/2 gap-4">
        <button className="flex flex-col rounded-lg p-3 bg-[#C4DBFF]">
          <div className="flex flex-col gap-1 items-start w-full">
            <span className="font-bold14">최근 확인했던 여행</span>
            <span className="font-medium12">여행여행여행</span>
            <div className="ml-auto mr-0 mt-3">
              <RecentlyIcon />
            </div>
          </div>
        </button>
        <button className="flex flex-col rounded-lg p-3 bg-[#898cff80]">
          <div className="flex flex-col gap-1 items-start w-full">
            <span className="font-bold14">다가오는 여행</span>
            <span className="font-medium12">여행여행여행</span>
            <div className="ml-auto mr-0 mt-3">
              <UpcomingIcon />
            </div>
          </div>
        </button>
      </div>
      <button className="flex flex-col rounded-lg p-3 bg-[#69af5433] w-1/2">
        <div className="flex flex-col gap-1 items-start h-full">
          <span className="font-bold14">내 여행 찾기</span>
          <span className="font-medium12 text-left">
            {`내가 만든 여행 리스트를\n확인해보세요`}
          </span>
          <img
            src="/images/img-find-travel.webp"
            className="bg-transparent w-full h-auto mt-auto"
            loading="lazy"
            alt=""
          />
        </div>
      </button>
    </section>
  );
}
