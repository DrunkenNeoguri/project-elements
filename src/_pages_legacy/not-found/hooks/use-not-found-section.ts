import { useNavigate } from "react-router";

export default function useNotFoundSection() {
  const navigate = useNavigate();

  const moveToPreviousPage = () => {
    navigate(-1);
  };
  return { moveToPreviousPage };
}
