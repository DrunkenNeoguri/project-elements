"use client";
import { RoundDot } from "../../../../components/loader/loader";
import BoardingPassTicket from "../../../../components/ticket/boarding-pass";
import TransportTicket from "../../../../components/ticket/transport-ticket";
import useSearch from "../_hooks/use-search";

export default function MyTravelListSection() {
  const { list } = useSearch();

  if (!list) {
    return (
      <section className="flex flex-col w-full pt-16 pb-6 px-0 box-border">
        <RoundDot />
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-2 py-6 px-4 w-full box-border">
      <div className="flex flex-col gap-4">
        {list.length === 0 ? (
          <section>
            <img src="/images/img-search-result-empty.webp" alt="" />
            <p>{`등록하신 여행이 없는 것 같아요.\n여행 계획을 준비중이시라면 여행 리스트를 등록해보시는 건 어떨까요?`}</p>
          </section>
        ) : (
          list?.map((ticket) => {
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
