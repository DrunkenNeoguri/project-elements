import TravelTicket from "../_components/travel-ticket";

export default function MainSearch() {
  // 훅 만들기

  return (
    <section className="flex flex-col gap-1 py-3 px-4 w-full box-border">
      <div className="flex justify-between items-center p-0 m-0">
        <h3 className="font-bold18 text-black m-0 p-0 ml-0 mr-auto">
          '{title}' 검색 결과
        </h3>
        <button className="bg-transparent flex font-medium14 text-black border-none outline-none p-0 m-0 cursor-pointer mr-0 ml-auto">
          검색 초기화
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {lists.length === 0 ? (
          <div></div>
        ) : (
          lists?.map((ticket) => {
            return <TravelTicket key={ticket.id} {...ticket} />;
          })
        )}
      </div>
    </section>
  );
}
