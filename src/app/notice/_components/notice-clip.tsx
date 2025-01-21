import { NoticeClipType } from "../../../types/option.types";

interface Props {
  clipType?: NoticeClipType;
}

export default function NoticeClip({ clipType = "공지" }: Props) {
  const clipStyleType = {
    ["이벤트"]: "border-primaryDeep text-primaryDeep",
    ["매거진"]: "border-secondary text-secondary",
    ["공지"]: "border-[#FF3737] text-[#FF3737]",
  };

  return (
    <div
      className={
        "flex min-w-12 min-h-4 box-border rounded-full justify-center items-center border " +
        clipStyleType[clipType]
      }
    >
      <span className="font-medium12 mt-[1px]">{clipType}</span>
    </div>
  );
}
