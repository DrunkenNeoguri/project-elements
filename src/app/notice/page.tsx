import OptionService from "../../services/option-services";
import NoticeItem from "./_components/notice-item";

export default async function Notice() {
  const noticeTitleList = await OptionService.getNoticeItemList();

  return (
    <>
      {noticeTitleList.map(({ id, title, clipType, createdAt }) => {
        return (
          <>
            <NoticeItem
              key={id}
              id={id}
              title={title}
              clipType={clipType as "이벤트" | "공지" | "매거진"}
              createdAt={createdAt}
            />
            <div className="h-[1px] w-full bg-grey" />
          </>
        );
      })}
    </>
  );
}
