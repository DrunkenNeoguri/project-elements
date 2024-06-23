import { useState } from "react";

// @MEMO - 네이버에서는 로그인 정보 기록이 아닌 로그인 정보 유지를 하고 있음.
// @MEMO - 로그인 화면에서 토큰 있으면 바로 메인으로 넘어가기
// @MEMO - 로그인 후 메인 갔다 뒤로 돌아가면 풀려있는 걸로.
// @MEMO - 최상단 page는 '/main' 컴포넌트와 완전히 동일하게 구성할 것.

export default function useLoginForm() {
  const [loginData, setLoginData] = useState<Record<string, string>>({});
  const [rememberLogin, setRememberLogin] = useState<boolean>(false);

  return { loginData, setLoginData, rememberLogin, setRememberLogin };
}
