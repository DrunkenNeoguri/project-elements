import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import Modal from "../../../common/components/modal";
import Portal from "../../../common/components/portal";
import { useSignUpComplete } from "../hooks/use-sign-up-complete";
import { StSignUpCompleteSection } from "../styles/sign-up-complete-section";

export default function SignUpCompleteSection() {
  const { openState, moveToMainPage, moveToSignInPage } = useSignUpComplete();
  return (
    <StSignUpCompleteSection.Section>
      <Description
        title="가입이 완료되었습니다!"
        context={`가입해주셔서 감사합니다!\n\n이제 가입하신 계정으로 로그인한 후,\n여행 준비물을 작성해볼까요?`}
      />
      <StSignUpCompleteSection.ImageBox>
        <StSignUpCompleteSection.Image
          src="/images/img-sign-up-complete-section.webp"
          alt=""
        />
      </StSignUpCompleteSection.ImageBox>
      <Button
        text="메인 화면으로 이동"
        type="button"
        onClick={() => moveToMainPage()}
      />
      {openState.state && (
        <Portal
          children={
            <Modal
              title="본인 인증 중 에러 발생"
              context={openState.message}
              modalType="alert"
              primary={{
                text: "로그인 페이지로 돌아가기",
                func: () => {
                  return moveToSignInPage();
                },
              }}
            />
          }
          container={document.body}
        />
      )}
    </StSignUpCompleteSection.Section>
  );
}
