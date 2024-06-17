import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function useRedirect() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const enteredMode = searchParams.get("mode");
  const actionCode = searchParams.get("oobCode");

  useEffect(() => {
    if (enteredMode === "verifyEmail") {
      setTimeout(() => {
        return navigate(`/users/verified?actionCode=${actionCode}`);
      }, 100);
    }
    if (enteredMode === "resetPassword") {
      setTimeout(() => {
        return navigate(
          `/users/change?step=inprogress&actionCode=${actionCode}`
        );
      }, 100);
    }
  }, [actionCode, enteredMode, searchParams, navigate]);
  return;
}
