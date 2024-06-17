import Description from "../../../common/components/description";
import { colors } from "../../../utils/util-color";
import { StMainHeader } from "../styles/main-header";
import useMainHeader from "../hooks/use-main-header";

export default function MainHeader() {
  const { username } = useMainHeader();

  return (
    <StMainHeader.Header>
      <Description
        title={`안녕하세요,\n${username}!\n\n어떤 여행을 준비중이신가요?`}
        color={colors.white}
      />
    </StMainHeader.Header>
  );
}
