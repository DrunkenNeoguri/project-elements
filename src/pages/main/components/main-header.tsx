import Description from "../../../common/components/description";
import { colors } from "../../../utils/util-color";
import { firebaseAuth } from "../../../utils/util-firebase";
import { StMainHeader } from "../styles/main-header";

export default function MainHeader() {
  const currentUser = firebaseAuth.currentUser;

  return (
    <StMainHeader.Header>
      <Description
        title={`안녕하세요,\n${currentUser?.displayName}!\n\n어떤 여행을 준비중이신가요?`}
        color={colors.white}
      />
    </StMainHeader.Header>
  );
}
