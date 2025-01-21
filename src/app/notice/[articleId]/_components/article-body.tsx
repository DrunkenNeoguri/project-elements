import Link from "next/link";
import { NoticeBody } from "../../../../types/option.types";

interface Props extends NoticeBody {}

export default function ArticleBody({ article, href }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col">{article}</div>
      <Link
        href={href}
        className="flex justify-center items-center w-full h-11 rounded border-box font-bold16 cursor-pointer bg-primary text-white"
      >
        템플릿 구경하러 가기
      </Link>
    </section>
  );
}
