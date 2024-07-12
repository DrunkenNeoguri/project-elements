"use client";
import TravelList from "./travel-list";
import Button from "../../../components/button/button";
import useListSection from "../_hooks/use-list-section";
import { RoundDot } from "../../../components/loader/loader";
import {
  filterClosedTravelData,
  filterRecentViewTravelData,
} from "../_utils/utils-lists";

export default function ListSection({ uid }: { uid?: string }) {
  const { list, router } = useListSection(uid);

  const handleMoveToTravelCreate = () => {
    return router.push("/travel/create");
  };

  if (!list) {
    return (
      <section className="flex flex-col w-full pt-16 pb-6 px-0 box-border">
        <RoundDot />
      </section>
    );
  }

  if (list.length === 0) {
    return (
      <section className="flex flex-col w-full pt-8 pb-6 px-4 box-border gap-6">
        <img src="/images/img-welcome-start.webp" alt="" />
        <p className="font-medium1 text-black text-center whitespace-pre-wrap">{`아직 여행을 등록한 적이 없으시네요!\n\n아래 버튼을 눌러\n여행 일정을 등록해볼까요?`}</p>
        <Button type="button" onClick={handleMoveToTravelCreate}>
          첫 여행 등록하기
        </Button>
      </section>
    );
  }

  return (
    <section className="flex flex-col w-full pt-3 pb-6 px-0 box-border">
      <TravelList
        title="최근 확인했던 여행"
        lists={filterRecentViewTravelData(list)}
      />
      <TravelList title="다가오는 여행" lists={filterClosedTravelData(list)} />
      <TravelList title="생성된 여행 리스트" lists={list} />
    </section>
  );
}
