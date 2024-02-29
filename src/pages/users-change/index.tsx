import SignHeader from "../../common/components/sign-header";
import ChangePasswordForm from "./components/change-password-form";
import { CompleteChangePasswordSection } from "./components/complete-change-password-section";
import useChangePassword from "./hooks/use-change-password";
import { isUserProgressedChangePassword } from "./policies/change-password";

export default function UsersChange() {
  const { pageState, setPageState } = useChangePassword();
  return (
    <>
      <SignHeader title="비밀번호 변경" />
      {isUserProgressedChangePassword(pageState) ? (
        <ChangePasswordForm setPageState={setPageState} />
      ) : (
        <CompleteChangePasswordSection />
      )}
    </>
  );
}
