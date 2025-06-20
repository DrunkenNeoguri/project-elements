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
  try {
    const noticeArticle = await OptionService.getNoticeOneArticle(articleId);

    if (noticeArticle == null) {
      // TODO: 페이지 진입 등이 잘못됐을 시, SSG인 점을 고려해서 차후 별도 기사 없음 페이지 노출 필요
      return <></>;
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
  } catch {
    return <></>;
  }
}
