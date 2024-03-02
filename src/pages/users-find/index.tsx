import { useSearchParams } from "react-router-dom";
import SignHeader from "../../common/components/sign-header";
import FindPasswordForm from "./components/find-password-form";
import { SendChangePasswordEmailSection } from "./components/send-change-password-email-section";
import { convertIndexNumberByStepParams } from "./util/users-find";

export default function UsersFind() {
  const [searchParams] = useSearchParams();
  const currentStep = searchParams.get("step");
  const componentLists = [
    <FindPasswordForm />,
    <SendChangePasswordEmailSection />,
  ];
  return (
    <>
      <SignHeader title="비밀번호 찾기" />
      {componentLists[convertIndexNumberByStepParams(currentStep)]}
    </>
  );
}
