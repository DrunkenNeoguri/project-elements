import { StMainSearchEmptySection } from "../styles/main-search-empty-section";

export default function MainSearchEmptySection() {
  return (
    <StMainSearchEmptySection.Section>
      <StMainSearchEmptySection.Image
        src="/images/img-search-result-empty.webp"
        alt=""
      />
      <StMainSearchEmptySection.Text>{`검색 결과, 해당하는 여행 계획이 없어요.\n다른 단어로 다시 검색해보시겠어요?`}</StMainSearchEmptySection.Text>
    </StMainSearchEmptySection.Section>
  );
}
