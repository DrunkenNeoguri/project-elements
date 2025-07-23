'use client';
import { GoogleIcon } from '../../../../assets/icons/icons';
import AuthService from '../../../../services/auth-services';
import useLoginOauth from '../_hooks/use-login-oauth';

export default function LoginOauthBox() {
  const { router, handleExternalList, setModalMsg } = useLoginOauth();

  const handleLoginWithGoogle = async () => {
    try {
      await AuthService.postGoogleLoginProcess();
      router.push('/main');
    } catch (error) {
      handleExternalList('login');
      setModalMsg((error as Error).message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-auto">
      <span className="font-light10 text-black">아래의 소셜 계정으로도 이용하실 수 있어요</span>
      <div className="flex gap-4 justify-center items-center">
        <button
          type="button"
          onClick={handleLoginWithGoogle}
          className="flex justify-center items-center w-8 h-8 rounded-full border-invalid border"
        >
          <GoogleIcon />
        </button>
      </div>
    </div>
  );
}
