import { NoticeClipType } from "../../../types/option.types";
import { NOTICE_CLIP_STYLES } from "../../../utils/util-constants";

interface Props {
  clipType?: NoticeClipType;
}

export default function NoticeClip({ clipType = "공지" }: Props) {
  return (
    <div
      className={
        "flex min-w-12 min-h-4 box-border rounded-full justify-center items-center border " +
        NOTICE_CLIP_STYLES[clipType]
      }
    >
      <span className="font-medium12 mt-[1px]">{clipType}</span>
    </div>
  );
}
