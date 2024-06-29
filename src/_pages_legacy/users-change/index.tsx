import { useSearchParams } from "react-router-dom";
import SignHeader from "../../common/components/sign-header";
import ChangePasswordForm from "./components/change-password-form";
import { CompleteChangePasswordSection } from "./components/complete-change-password-section";
import { convertIndexNumberByStepParams } from "./util/users-change";

export default function UsersChange() {
  const [searchParams] = useSearchParams();
  const currentStep = searchParams.get("step");
  const componentLists = [
    <ChangePasswordForm />,
    <CompleteChangePasswordSection />,
  ];
  return (
    <>
      <SignHeader title="비밀번호 변경" />
      {componentLists[convertIndexNumberByStepParams(currentStep)]}
    </>
  );
}
