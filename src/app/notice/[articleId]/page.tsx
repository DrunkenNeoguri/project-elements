import ArticleBody from "./_components/article-body";
import ArticleTitle from "./_components/article-title";
import OptionService from "../../../services/option-services";

export async function generateStaticParams() {
  const articleState = await OptionService.getNoticeArticles();

  return articleState.map(({ noticeTitle }) => {
    return {
      articleId: noticeTitle.id,
    };
  });
}

export default async function NoticeArticle({
  params: { articleId },
}: {
  params: { articleId: string };
}) {
  const noticeArticle = await OptionService.getNoticeOneArticle(articleId);

  if (noticeArticle == null) {
    return;
  }

  const { noticeTitle, noticeBody } = noticeArticle;

  return (
    <article className="flex flex-col gap-2 mt-1 w-full">
      <ArticleTitle {...noticeTitle} />
      <div className="w-full h-[1px] bg-grey" />
      <ArticleBody {...noticeBody} />
    </article>
  );
}
