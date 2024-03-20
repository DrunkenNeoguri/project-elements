import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import Input from "../../../common/components/input";
import { isTrueCompareWithValueAndCondition } from "../../../common/policies/input";
import {
  convertEmailErrorMessageByValue,
  convertPasswordErrorMessageByValue,
} from "../../../common/utils/input";
import { emailRegExp, passwordRegExp } from "../../../utils/util-constants";
import useSignInForm from "../hooks/use-sign-in-form";
import { StSignInForm } from "../styles/sign-in-form";
import UnCheckedIcon from "../../../assets/icons/svg-sign-in-form-unchecked-icon.svg?react";
import CheckedIcon from "../../../assets/icons/svg-sign-in-form-checked-icon.svg?react";
import { isClickedAutoSignInButton } from "../policies/sign-in-form";
import Portal from "../../../common/components/portal";
import Modal from "../../../common/components/modal";

export default function SignInForm() {
  const {
    openState,
    setOpenState,
    formInput,
    updateFormInput,
    autoSignInState,
    toggleAutoSignInState,
    postSignInProcess,
    errorMsgState,
  } = useSignInForm();
  return (
    <StSignInForm.Form onSubmit={(e) => postSignInProcess(e)}>
      <Description
        title="안녕하세요!"
        context="회원이신가요? 아래의 내용을 기입하고 로그인해주세요."
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

      <Input
        id="password"
        title="비밀번호"
        onChange={(e) => updateFormInput("password", e.currentTarget.value)}
        value={formInput.password}
        type="password"
        errorMessage={convertPasswordErrorMessageByValue(formInput.password)}
        firstInputCheck={errorMsgState.password}
        errorCondition={isTrueCompareWithValueAndCondition(
          formInput.password,
          passwordRegExp
        )}
      />
      <StSignInForm.AutoSignInButton
        type="button"
        onClick={() => toggleAutoSignInState()}
      >
        {isClickedAutoSignInButton(autoSignInState) ? (
          <CheckedIcon />
        ) : (
          <UnCheckedIcon />
        )}
        <StSignInForm.AutoSignInText>자동 로그인</StSignInForm.AutoSignInText>
      </StSignInForm.AutoSignInButton>
      <StSignInForm.ButtonBox>
        <Button text="로그인" type="submit" />
      </StSignInForm.ButtonBox>
      <StSignInForm.BottomBox>
        <StSignInForm.TextBox>
          <StSignInForm.Text>회원이 아니신가요?</StSignInForm.Text>
          <StSignInForm.Link href="/users/signup">회원가입</StSignInForm.Link>
        </StSignInForm.TextBox>
        <StSignInForm.TextBox>
          <StSignInForm.Text>비밀번호를 잊어버리셨나요?</StSignInForm.Text>
          <StSignInForm.Link href="/users/find">
            비밀번호 찾기
          </StSignInForm.Link>
        </StSignInForm.TextBox>
        <StSignInForm.LanguageBox>
          <StSignInForm.Text>언어 - </StSignInForm.Text>
          <StSignInForm.LanguageButton>English</StSignInForm.LanguageButton>
          <StSignInForm.Text> | </StSignInForm.Text>
          <StSignInForm.LanguageButton>한국어</StSignInForm.LanguageButton>
          <StSignInForm.Text> | </StSignInForm.Text>
          <StSignInForm.LanguageButton>日本語</StSignInForm.LanguageButton>
        </StSignInForm.LanguageBox>
      </StSignInForm.BottomBox>
      {openState.state && (
        <Portal
          children={
            <Modal
              title="로그인 문제가 발생했습니다."
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
    </StSignInForm.Form>
  );
}
