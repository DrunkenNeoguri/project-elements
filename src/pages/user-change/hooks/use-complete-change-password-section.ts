import { useNavigate } from "react-router-dom";

export default function useCompleteChangePasswordSection() {
  const navigate = useNavigate();

  const moveToSignInPage = () => {
    navigate("/signin");
  };

  return { moveToSignInPage };
}
