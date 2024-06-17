import useSignUpForm from "../hooks/use-sign-up-form";
import { StSignUpForm } from "../styles/sign-up-form";
import Description from "../../../common/components/description";
import Input from "../../../common/components/input";
import {
  emailRegExp,
  passwordRegExp,
  usernameRegExp,
} from "../../../utils/util-constants";
import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import Button from "../../../common/components/button";
import {
  convertConfirmPasswordErrorMessageByValues,
  convertEmailErrorMessageByValue,
  convertPasswordErrorMessageByValue,
  convertUsernameErrorMessageByValue,
} from "../../../common/utils/input";
import Portal from "../../../common/components/portal";
import Modal from "../../../common/components/modal";

export default function SignUpForm() {
  const {
    openState,
    setOpenState,
    formInput,
    updateFormInput,
    postSignUpProcess,
    errorMsgState,
    goToPreviousScreen,
  } = useSignUpForm();
  return (
    <StSignUpForm.Form onSubmit={(e) => postSignUpProcess(e)}>
      <Description
        title="반갑습니다!"
        context="아래의 내용을 기입하셔서 회원가입을 진행해주세요."
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
        isViewMark={true}
      />

      <Input
        id="password"
        title="비밀번호"
        onChange={(e) => updateFormInput("password", e.currentTarget.value)}
        value={formInput.password}
        type="password"
        placeholder="영문, 숫자, 특수 문자 포함 8~20자 이내"
        maxLength={20}
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
        onChange={(e) =>
          updateFormInput("confirmPassword", e.currentTarget.value)
        }
        value={formInput.confirmPassword}
        type="password"
        placeholder="영문, 숫자, 특수 문자 포함 8~20자 이내"
        maxLength={20}
        errorMessage={convertConfirmPasswordErrorMessageByValues(
          formInput.confirmPassword,
          formInput.password
        )}
        firstInputCheck={errorMsgState.confirmPassword}
        errorCondition={isTrueCompareWithValueAndCondition(
          formInput.confirmPassword,
          passwordRegExp,
          formInput.password
        )}
        isViewMark={true}
      />

      <Input
        id="username"
        title="닉네임"
        onChange={(e) => updateFormInput("username", e.currentTarget.value)}
        value={formInput.username}
        type="text"
        placeholder="영문 숫자 포함 2~14자 이내"
        errorMessage={convertUsernameErrorMessageByValue(formInput.username)}
        maxLength={14}
        firstInputCheck={errorMsgState.username}
        errorCondition={isTrueCompareWithValueAndCondition(
          formInput.username,
          usernameRegExp
        )}
        isViewMark={true}
      />
      <StSignUpForm.ButtonBox>
        <Button text="다음 단계로" type="submit" />
        <Button
          text="돌아가기"
          type="button"
          colorType="invalid"
          onClick={() => goToPreviousScreen()}
        />
      </StSignUpForm.ButtonBox>
      {openState.state && (
        <Portal
          children={
            <Modal
              title="회원가입 중 에러 발생"
              context={openState.message}
              modalType="alert"
              primary={{
                text: "알겠습니다.",
                func: () => setOpenState({ state: false, message: "" }),
              }}
            />
          }
          container={document.body}
        />
      )}
    </StSignUpForm.Form>
  );
}
