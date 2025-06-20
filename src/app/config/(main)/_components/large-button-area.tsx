'use client';
import Link from 'next/link';
import { HelpTalkIcon, NoticeIcon } from '../../../../assets/icons/icons';

export default function LargeButtonArea() {
  return (
    <section className="w-full flex p-4 gap-4">
      <Link
        className="rounded flex flex-col justify-center items-center w-full p-4 gap-4"
        href="/notice"
      >
        <NoticeIcon />
        <span className="font-medium12 text-black">공지사항</span>
      </Link>
      <Link className="rounded flex flex-col justify-center items-center w-full p-4 gap-4" href="/">
        <HelpTalkIcon />
        <span className="font-medium12 text-black">이용 문의 (오픈카톡)</span>
      </Link>
    </section>
  );
}
