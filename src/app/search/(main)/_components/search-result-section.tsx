"use client";

import { UndoIcon } from "../../../../assets/icons/icons";
import { RoundDot } from "../../../../components/loader/loader";
import BoardingPassTicket from "../../../../components/ticket/boarding-pass";
import TransportTicket from "../../../../components/ticket/transport-ticket";
import useGetUserTravelList from "../../../../hooks/use-get-user-travel-list";

export default function SearchResultSection() {
  const { list, keyword, router } = useGetUserTravelList();

  const handleOnClick = () => {
    try {
      return router.replace("/search");
    } catch (error) {
      // TODO: 차후에 Sentry 등 배치해서 에러 트래킹 수정 필요.
    }
  };

  if (!list) {
    return (
      <section className="flex flex-col w-full pt-16 pb-6 px-0 box-border">
        <div
          role="alert"
          aria-busy="true"
          aria-label="검색 결과를 불러오는 중입니다"
        >
          <RoundDot />
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-2 py-6 px-4 w-full box-border">
      <div className="flex justify-between items-center p-0 m-0">
        <h3 className="font-medium12 text-black m-0 p-0 ml-0 mr-auto">
          "<span className="text-primary">{keyword}</span>" 검색 결과
          <span className="text-primary"> {list.length}</span> 건
        </h3>
        <button
          type="button"
          onClick={handleOnClick}
          className="bg-transparent flex justify-center items-center font-medium12 text-black border-none outline-none p-0 m-0 cursor-pointer mr-0 ml-auto gap-1"
        >
          <UndoIcon width={12} height={12} />
          <span>검색 초기화</span>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {list.length === 0 ? (
          <section>
            <img
              src="/images/img-search-result-empty.webp"
              width={300}
              height={200}
              alt="여행 리스트가 비어있음을 안내하는 이미지"
              loading="lazy"
            />
            <p className="whitespace-pre-line">
              검색 결과, 해당하는 여행 계획이 없어요. 다른 단어로 다시
              검색해보시겠어요?
            </p>
          </section>
        ) : (
          list.map((ticket) => {
            return ticket.travelType === "domestic" ? (
              <TransportTicket key={ticket.id} {...ticket} />
            ) : (
              <BoardingPassTicket key={ticket.id} {...ticket} />
            );
          })
        )}
      </div>
    </section>
  );
}
