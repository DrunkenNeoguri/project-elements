import { useNavigate } from "react-router-dom";

export function useSignUpComplete() {
  const navigate = useNavigate();

  const moveToSignInPage = () => {
    navigate("/signin");
  };

  return { moveToSignInPage };
}
