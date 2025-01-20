import NoticeItem from "./_components/notice-item";

export default function Notice() {
  const objects = [
    {
      title: "마카나파아마타파차가가사가자다나",
      clipType: "이벤트",
      createdAt: "2022-08-11",
    },
    {
      title: "가카바자가사나하차아자",
      clipType: "이벤트",
      createdAt: "2022-06-27",
    },
    {
      title: "사카하아파차카다마하타나카바마차카",
      clipType: "공지",
      createdAt: "2022-02-11",
    },
    {
      title: "하타마차차타차파다하파차타파카하마마바가자하바나",
      clipType: "매거진",
      createdAt: "2022-10-10",
    },
    {
      title: "차가파하하카자카자사",
      clipType: "이벤트",
      createdAt: "2023-12-12",
    },
    {
      title: "아자타나카마하나카아사사아",
      clipType: "공지",
      createdAt: "2023-12-14",
    },
    {
      title: "사자자하타다타카타자하차하자바타차아마타차",
      clipType: "매거진",
      createdAt: "2022-03-20",
    },
    {
      title: "타카가가사라하가아라하다나",
      clipType: "공지",
      createdAt: "2023-03-06",
    },
    {
      title: "타바가바마하사마카아자라나가파자아마가자",
      clipType: "매거진",
      createdAt: "2022-03-01",
    },
    {
      title: "자라파바카가파사자차마자라나카다아",
      clipType: "매거진",
      createdAt: "2022-10-22",
    },
    {
      title: "차파라사타차카나라나차마자라바나타사",
      clipType: "공지",
      createdAt: "2022-09-22",
    },
    {
      title: "라라다라파나아나파카차아라나파아파가라바파",
      clipType: "이벤트",
      createdAt: "2023-09-13",
    },
    {
      title: "마바카사마바마라바카카파카사가자가카바라마가타하",
      clipType: "매거진",
      createdAt: "2023-12-31",
    },
    {
      title: "마라사바아바아차타가카아마아파하바하사하라사아차바하",
      clipType: "매거진",
      createdAt: "2023-03-08",
    },
    {
      title: "가하가아자아가하자아파다가카나마자파바하차나다사마하다다바",
      clipType: "매거진",
      createdAt: "2022-08-29",
    },
    {
      title: "가마다카사하하카자아파타나",
      clipType: "공지",
      createdAt: "2022-07-17",
    },
    {
      title: "나마아차바차바타가카가파자사사가나바바사아마",
      clipType: "이벤트",
      createdAt: "2022-11-23",
    },
    {
      title: "타사바가타아자마아마카나하사차파하",
      clipType: "매거진",
      createdAt: "2022-05-22",
    },
    {
      title: "마바카타다라마하나타다아라아다하사라아파다나",
      clipType: "매거진",
      createdAt: "2023-05-15",
    },
    {
      title: "파아카하차하가타카다바타자마나나카",
      clipType: "공지",
      createdAt: "2022-04-24",
    },
  ];
  return (
    <>
      {objects.map(({ title, clipType, createdAt }, index) => {
        return (
          <>
            <NoticeItem
              key={index}
              title={title}
              clipType={clipType as "이벤트" | "공지" | "매거진"}
              createdAt={createdAt}
            />
            <div className="h-[1px] w-full bg-gray" />
          </>
        );
      })}
    </>
  );
}
