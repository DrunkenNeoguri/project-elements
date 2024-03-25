import useFindPasswordForm from "../hooks/use-find-password-form";
import { StFindPasswordForm } from "../styles/find-password-form";
import Description from "../../../common/components/description";
import Input from "../../../common/components/input";
import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import { emailRegExp } from "../../../utils/util-constants";
import Button from "../../../common/components/button";
import { convertEmailErrorMessageByValue } from "../../../common/utils/input";
import Portal from "../../../common/components/portal";
import Modal from "../../../common/components/modal";

export default function FindPasswordForm() {
  const {
    openState,
    setOpenState,
    formInput,
    updateFormInput,
    postFindPasswordProcess,
    errorMsgState,
    goToPreviousScreen,
  } = useFindPasswordForm();
  return (
    <StFindPasswordForm.Form onSubmit={(e) => postFindPasswordProcess(e)}>
      <Description
        title="비밀번호를 잊으셨나요?"
        context={`가입하신 이메일 주소를 입력하시면,\n새로운 비밀번호를 입력할 수 있도록 링크를 보내드립니다.`}
      />

      <Input
        id="email"
        title="이메일 주소"
        onChange={(e) => updateFormInput("email", e.currentTarget.value)}
        value={formInput.email}
        type="email"
        errorMessage={convertEmailErrorMessageByValue(formInput.email)}
        firstInputCheck={errorMsgState.email}
        errorCondition={isTrueCompareWithValueAndCondition(
          formInput.email,
          emailRegExp
        )}
      />

      <StFindPasswordForm.ButtonBox>
        <Button text="확인 이메일 보내기" type="submit" />
        <Button
          text="돌아가기"
          type="button"
          colorType="invalid"
          onClick={() => goToPreviousScreen()}
        />
      </StFindPasswordForm.ButtonBox>
      {openState.state && (
        <Portal
          children={
            <Modal
              title="이메일 전송 중 에러 발생"
              context={openState.message}
              modalType="alert"
              primary={{
                text: "알겠습니다.",
                func: () => {
                  return setOpenState({ state: false, message: "" });
                },
              }}
            />
          }
          container={document.body}
        />
      )}
    </StFindPasswordForm.Form>
  );
}
