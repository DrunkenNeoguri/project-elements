import { useNavigate } from "react-router-dom";

export default function useCompleteChangePasswordSection() {
  const navigate = useNavigate();

  const moveToSignInPage = () => {
    return navigate("/users/signin");
  };

  return { moveToSignInPage };
}
