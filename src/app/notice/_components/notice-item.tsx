import Link from 'next/link';
import NoticeClip from './notice-clip';
import { Notice } from '../../../types/option.types';

type Props = Notice;

export default function NoticeItem({ id, title, clipType, createdAt }: Props) {
  return (
    <li className="flex flex-col w-full mt-4 mb-2">
      <Link href={`/notice/${id}`}>
        <div className="flex gap-2 justify-start items-center">
          <NoticeClip clipType={clipType} />
          <p className="font-medium mt-[3px] text-sm whitespace-nowrap max-w-[292px] truncate">
            {title}
          </p>
        </div>
        <span className="font-light10 text-invalid ml-0 mr-auto">{createdAt}</span>
      </Link>
    </li>
  );
}
