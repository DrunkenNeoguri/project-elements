"use client";
import { useContext, useEffect, useState } from "react";
import { RecentlyIcon, UpcomingIcon } from "../../../assets/icons/icons";
import { AuthContext } from "../../../providers/auth-provider";
import { UserInfoType } from "../../../types/user.types";
import Link from "next/link";
import FirstCreateInfoSection from "./first-create-info-section";

export default function ButtonSection() {
  const [userData, setUserData] = useState<UserInfoType | null>(null);
  const user = useContext(AuthContext);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (user && userInfo != null) {
      const parseUserInfo = JSON.parse(userInfo) as UserInfoType;
      setUserData(parseUserInfo);
    }
  }, [user]);

  if (!userData?.recentTravel && !userData?.upcomingTravel) {
    return <FirstCreateInfoSection />;
  }

  return (
    <section className="flex gap-4 w-full my-6">
      <div className="flex flex-col w-1/2 gap-4">
        <Link
          className="flex flex-col rounded-lg p-3 bg-[#C4DBFF]"
          href={`/element?id=${userData?.recentTravel?.id}`}
        >
          <div className="flex flex-col gap-1 items-start w-full">
            <span className="font-bold14">최근 확인했던 여행</span>
            <span className="font-medium12">
              {userData?.recentTravel?.title === ""
                ? "등록된 여행이 없습니다."
                : userData?.recentTravel?.title}
            </span>
            <div className="ml-auto mr-0 mt-3">
              <RecentlyIcon />
            </div>
          </div>
        </Link>
        <Link
          className="flex flex-col rounded-lg p-3 bg-[#898cff80]"
          href={`/element?id=${userData?.upcomingTravel?.id}`}
        >
          <div className="flex flex-col gap-1 items-start w-full">
            <span className="font-bold14">다가오는 여행</span>
            <span className="font-medium12">
              {userData?.upcomingTravel?.title === ""
                ? "등록된 여행이 없습니다."
                : userData?.upcomingTravel?.title}
            </span>
            <div className="ml-auto mr-0 mt-3">
              <UpcomingIcon />
            </div>
          </div>
        </Link>
      </div>
      <Link
        href="/search/mylist"
        className="flex flex-col rounded-lg p-3 bg-[#69af5433] w-1/2"
      >
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
      </Link>
    </section>
  );
}
