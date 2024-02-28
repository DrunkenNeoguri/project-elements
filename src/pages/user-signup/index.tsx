import SignHeader from "../../common/components/sign-header";
import SignUpForm from "./components/sign-up-form";
import { SignUpVerifySection } from "./components/sign-up-verify-section";
import useSignUp from "./hooks/use-sign-up";
import { isUserProgressedSignUp } from "./policies/sign-up";

export default function UserSignUp() {
  const { pageState, setPageState } = useSignUp();
  return (
    <>
      <SignHeader title="회원가입" />
      {isUserProgressedSignUp(pageState.state) ? (
        <SignUpForm setPageState={setPageState} />
      ) : (
        <SignUpVerifySection pageState={pageState} />
      )}
    </>
  );
}
