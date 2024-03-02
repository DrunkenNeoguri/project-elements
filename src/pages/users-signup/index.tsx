import { useSearchParams } from "react-router-dom";
import SignHeader from "../../common/components/sign-header";
import SignUpForm from "./components/sign-up-form";
import { SignUpVerifySection } from "./components/sign-up-verify-section";
import { convertIndexNumberByStepParams } from "./util/users-signup";

export default function UsersSignUp() {
  const [searchParams] = useSearchParams();
  const currentStep = searchParams.get("step");
  const componentLists = [<SignUpForm />, <SignUpVerifySection />];
  return (
    <>
      <SignHeader title="회원가입" />
      {componentLists[convertIndexNumberByStepParams(currentStep)]}
    </>
  );
}
