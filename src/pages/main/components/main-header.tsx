import Description from "../../../common/components/description";
import { colors } from "../../../utils/util-color";
import { StMainHeader } from "../styles/main-header";

export default function MainHeader() {
  return (
    <StMainHeader.Header>
      <Description
        title={`안녕하세요,\n준비물제작위원회!\n\n어떤 여행을 준비중이신가요?`}
        color={colors.white}
      />
    </StMainHeader.Header>
  );
}
