"use client";
import { useRouter, useSearchParams } from "next/navigation";
import useListSection from "../main/_hooks/use-list-section";
import { RoundDot } from "../../components/loader/loader";
import TravelTicket from "../main/_components/travel-ticket";
import { UndoIcon } from "../../assets/icons/icons";

export default function MainSearch() {
  const { list } = useListSection();

  // ! TODO: Hook 분리
  const searchParams = useSearchParams();
  const router = useRouter();
  const keyword = searchParams?.get("keyword") ?? null;

  if (!list) {
    return (
      <section className="flex flex-col w-full pt-16 pb-6 px-0 box-border">
        <RoundDot />
      </section>
    );
  }

  // ! TODO : 필터링 관련 firestore에서 처리할 수 있는지 확인 필요
  // ! TODO : 없으면 검색 로직까지 내부적으로 별도로 만들도록 하고 Hook 별도 분리
  const getSearchlistByFiltering = () => {
    if (keyword !== null) {
      const searchList = list.filter((data) => {
        return (
          data.title.includes(keyword) || data.destination.includes(keyword)
        );
      });

      return searchList.sort(
        (a, b) =>
          new Date(a.departureAt).getTime() - new Date(b.departureAt).getTime()
      );
    } else {
      return [];
    }
  };

  const handleMoveToMain = () => {
    return router.push("/main");
  };

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
        {getSearchlistByFiltering().length === 0 ? (
          <section>
            <img src="/images/img-search-result-empty.webp" alt="" />
            <p>{`검색 결과, 해당하는 여행 계획이 없어요.\n다른 단어로 다시 검색해보시겠어요?`}</p>
          </section>
        ) : (
          getSearchlistByFiltering()?.map((ticket) => {
            return <TravelTicket key={ticket.id} {...ticket} />;
          })
        )}
      </div>
    </section>
  );
}
