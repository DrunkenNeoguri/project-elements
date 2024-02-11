import SignHeader from "../../common/components/sign-header";
import FindPasswordForm from "./components/find-password-form";
import { SendChangePasswordEmailSection } from "./components/send-change-password-email-section";
import useFindPassword from "./hooks/use-find-password";
import { isUserProgressedFindPassword } from "./policies/find-password";

export default function FindPasswordPage() {
  const { pageState, setPageState } = useFindPassword();
  return (
    <>
      <SignHeader title="비밀번호 찾기" />
      {isUserProgressedFindPassword(pageState) ? (
        <FindPasswordForm setPageState={setPageState} />
      ) : (
        <SendChangePasswordEmailSection />
      )}
    </>
  );
}
