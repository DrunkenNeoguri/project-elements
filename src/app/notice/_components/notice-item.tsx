import Link from "next/link";
import NoticeClip from "./notice-clip";

interface Props {
  title: string;
  clipType: "이벤트" | "매거진" | "공지";
  createdAt: string;
}

export default function NoticeItem({ title, clipType, createdAt }: Props) {
  return (
    <li className="flex flex-col w-full mt-4 mb-2">
      <Link href="/">
        <div className="flex gap-2 justify-start items-center">
          <NoticeClip clipType={clipType} />
          <p className="font-medium mt-[3px] text-sm whitespace-nowrap max-w-[292px] truncate">
            {title}
          </p>
        </div>
        <span className="font-light10 text-invalid ml-0 mr-auto">
          {createdAt}
        </span>
      </Link>
    </li>
  );
}
