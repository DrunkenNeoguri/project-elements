import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  article: string;
  href?: string;
}

export default function ArticleBody({ article, href }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          a: ({ node: _node, ...props }) => {
            if (props.href?.startsWith('http')) {
              return <a {...props} target="_blank" rel="noopener noreferrer" />;
            }
            return <a {...props} />;
          },
        }}
      >
        {article}
      </Markdown>
      {href ? (
        <Link
          href={href}
          className="flex justify-center items-center w-full h-11 rounded border-box font-bold16 cursor-pointer bg-primary text-white"
        >
          템플릿 구경하러 가기
        </Link>
      ) : null}
    </section>
  );
}
