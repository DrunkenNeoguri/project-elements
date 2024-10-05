"use client";
import { GoogleIcon } from "../../../../assets/icons/icons";
import Button from "../../../../components/button/button";
import AuthService from "../../../../services/auth-services";
import useLoginOauth from "../_hooks/use-login-oauth";

export default function LoginOauthBox() {
  const { router, handleExternalList, setModalMsg } = useLoginOauth();

  const handleLoginWithGoogle = async () => {
    const googleLoginState = await AuthService.postGoogleLoginProcess();
    if (googleLoginState === "OK") {
      router.push("/main");
    } else {
      handleExternalList("login");
      setModalMsg(googleLoginState.message);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <Button type="button" colorTheme="white" onClick={handleLoginWithGoogle}>
        <GoogleIcon />
        <span>구글 계정으로 시작하기</span>
      </Button>
    </div>
  );
}
