import Button from "../../../common/components/button";
import useNotFoundSection from "../hooks/use-not-found-section";
import { StNotFoundSection } from "../styles/not-found-section";

export default function NotFoundSection() {
  const { moveToPreviousPage } = useNotFoundSection();
  return (
    <StNotFoundSection.Section>
      <StNotFoundSection.Image
        src="/images/img-not-found.webp"
        alt=""
        loading="lazy"
      />
      <StNotFoundSection.Title>
        이런! 페이지를 찾을 수 없어요.
      </StNotFoundSection.Title>
      <StNotFoundSection.Description>
        {`페이지가 존재하지 않거나,\n사용할 수 없는 페이지입니다.\n\n입력하신 주소가 정확한지\n다시 한 번 확인해주세요.`}
      </StNotFoundSection.Description>
      <Button
        text="이전 페이지로 돌아가기"
        type="button"
        onClick={() => moveToPreviousPage()}
      />
    </StNotFoundSection.Section>
  );
}
