import useChangePasswordForm from "../hooks/use-change-password-form";
import { StChangePasswordForm } from "../styles/change-password-form";
import Description from "../../../common/components/description";
import Input from "../../../common/components/input";
import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import { passwordRegExp } from "../../../utils/util-constants";
import Button from "../../../common/components/button";
import {
  convertConfirmPasswordErrorMessageByValues,
  convertPasswordErrorMessageByValue,
} from "../../../common/utils/input";
import Portal from "../../../common/components/portal";
import Modal from "../../../common/components/modal";

export default function ChangePasswordForm() {
  const {
    openState,
    moveToFindPasswordPage,
    formInput,
    updateFormInput,
    postChangePasswordProcess,
    errorMsgState,
  } = useChangePasswordForm();
  return (
    <StChangePasswordForm.Form onSubmit={(e) => postChangePasswordProcess(e)}>
      <Description
        title="새 비밀번호를 입력해주세요."
        context="가입하신 계정에 적용할 새로운 비밀번호를 입력해주세요."
      />
      <Input
        id="password"
        title="비밀번호"
        placeholder="영문, 숫자, 특수 문자 포함 8~20자 이내"
        onChange={(e) => updateFormInput("password", e.currentTarget.value)}
        value={formInput.password}
        type="password"
        errorMessage={convertPasswordErrorMessageByValue(formInput.password)}
        firstInputCheck={errorMsgState.password}
        errorCondition={isTrueCompareWithValueAndCondition(
          formInput.password,
          passwordRegExp
        )}
        isViewMark={true}
      />

      <Input
        id="confirmPassword"
        title="비밀번호 재확인"
        placeholder="영문, 숫자, 특수 문자 포함 8~20자 이내"
        onChange={(e) =>
          updateFormInput("confirmPassword", e.currentTarget.value)
        }
        value={formInput.confirmPassword}
        type="password"
        errorMessage={convertConfirmPasswordErrorMessageByValues(
          formInput.confirmPassword,
          formInput.password
        )}
        firstInputCheck={errorMsgState.password}
        errorCondition={isTrueCompareWithValueAndCondition(
          formInput.confirmPassword,
          passwordRegExp,
          formInput.password
        )}
        isViewMark={true}
      />
      <StChangePasswordForm.ButtonBox>
        <Button text="새 비밀번호로 변경" type="submit" />
      </StChangePasswordForm.ButtonBox>
      {openState.state && (
        <Portal
          children={
            <Modal
              title="비밀번호 변경 중 에러 발생"
              context={openState.message}
              modalType="alert"
              primary={{
                text: "비밀번호 찾기 페이지로 돌아가기",
                func: () => moveToFindPasswordPage(),
              }}
            />
          }
          container={document.body}
        />
      )}
    </StChangePasswordForm.Form>
  );
}
