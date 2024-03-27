import Description from "../../../common/components/description";
import { colors } from "../../../utils/util-color";
import { StMainHeader } from "../styles/main-header";
import useMainHeader from "../hooks/use-main-header";
import { Suspense } from "react";

export default function MainHeader() {
  const { username } = useMainHeader();

  return (
    <StMainHeader.Header>
      <Suspense fallback={<div>대기중</div>}>
        <Description
          title={`안녕하세요,\n${username}!\n\n어떤 여행을 준비중이신가요?`}
          color={colors.white}
        />
      </Suspense>
    </StMainHeader.Header>
  );
}
