import { useNavigate } from "react-router-dom";
import Button from "../../../common/components/button";
import { StMainEmptySection } from "../styles/main-empty-section";

export default function MainEmptySection() {
  const navigate = useNavigate();

  return (
    <StMainEmptySection.Section>
      <StMainEmptySection.Image
        src="/images/img-main-empty-section.webp"
        alt=""
      />
      <StMainEmptySection.Text>{`아직 여행을 등록한 적이 없으시네요!\n\n아래 버튼을 눌러\n여행 일정을 등록해볼까요?`}</StMainEmptySection.Text>
      <Button
        type="button"
        onClick={() => navigate("/lists/create")}
        text="새 여행 등록하기"
      />
    </StMainEmptySection.Section>
  );
}
