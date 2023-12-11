import {
  ButtonList,
  Container,
  ContentBox,
  ContentImage,
  ContentSubject,
  ContentText,
} from "./styles/style";
import { useMain } from "./hooks/useMain";
import { Button } from "../../common/components/ui/Button";
import { Layout } from "../../layout";

function Main() {
  const { componentRef, componentWidth } = useMain();

  return (
    <Layout>
      <Container>
        <ContentBox ref={componentRef}>
          <ContentSubject>{`어떤 여행을\n준비하고 계신가요?`}</ContentSubject>
          <ContentImage
            src="images/onboarding_main.svg"
            width={componentWidth - 96}
          />
          <ContentText>
            {`가시는 여행에 따른 준비물 리스트를\n저희가 미리 만들어드려요!`}
          </ContentText>
          <ButtonList>
            <Button styleType="full" bgColor="#009688">
              국내 여행이요!
            </Button>
            <Button styleType="full" bgColor="#009688">
              해외 여행이요!
            </Button>
            <Button styleType="full" bgColor="#009688">
              직접 설정할게요!
            </Button>
          </ButtonList>
        </ContentBox>
      </Container>
    </Layout>
  );
}

export default Main;
