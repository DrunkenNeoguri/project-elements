import ArticleBody from "./_components/article-body";
import ArticleTitle from "./_components/article-title";
import OptionService from "../../../services/option-services";
import { firebaseStorage } from "../../../utils/util-firebase";
import { getDownloadURL, ref } from "firebase/storage";

export async function generateStaticParams() {
  const articleState = await OptionService.getNoticeArticles();

  return articleState.map(({ id }) => {
    return {
      articleId: id,
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

  const url = await getDownloadURL(
    ref(await firebaseStorage(), `notices/${articleId}.md`)
  );
  const response = await (await fetch(url)).text();
  const { href, ...rest } = noticeArticle;

  return (
    <article className="flex flex-col gap-2 mt-1 w-full">
      <ArticleTitle {...rest} />
      <div className="w-full h-[1px] bg-grey" />
      <ArticleBody href={href} article={response} />
    </article>
  );
}
