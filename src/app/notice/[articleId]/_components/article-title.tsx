import { NoticeTitle } from "../../../../types/option.types";
import NoticeClip from "../../_components/notice-clip";

interface Props extends NoticeTitle {}

export default function ArticleTitle({ title, clipType, createdAt }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h1 className="font-medium16">{title}</h1>
      <div className="flex ml-auto mr-0 gap-1 justify-center items-center">
        <span className="font-light10 text-invalid ml-0 mr-auto">
          {createdAt}
        </span>
        <NoticeClip clipType={clipType} />
      </div>
    </div>
  );
}
