"use client";
import { RoundDot } from "../../components/loader/loader";
import { UndoIcon } from "../../assets/icons/icons";
import Ticket from "../../components/ticket/ticket";
import useSearch from "./_hooks/use-search";

export default function MainSearch() {
  const { list, router, keyword } = useSearch();
  const handleMoveToMain = () => {
    return router.push("/main");
  };

  if (!list) {
    return (
      <section className="flex flex-col w-full pt-16 pb-6 px-0 box-border">
        <RoundDot />
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-1 py-6 px-4 w-full box-border">
      <div className="flex justify-between items-center p-0 m-0">
        <h3 className="font-bold18 text-black m-0 p-0 ml-0 mr-auto">
          ''{keyword}'' 검색 결과
        </h3>
        <button
          className="bg-transparent flex font-medium14 text-black border-none outline-none p-0 m-0 cursor-pointer mr-0 ml-auto gap-1"
          type="button"
          onClick={handleMoveToMain}
        >
          <UndoIcon />
          검색 초기화
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {list.length === 0 ? (
          <section>
            <img src="/images/img-search-result-empty.webp" alt="" />
            <p>{`검색 결과, 해당하는 여행 계획이 없어요.\n다른 단어로 다시 검색해보시겠어요?`}</p>
          </section>
        ) : (
          list?.map((ticket) => {
            return <Ticket key={ticket.id} {...ticket} />;
          })
        )}
      </div>
    </section>
  );
}
