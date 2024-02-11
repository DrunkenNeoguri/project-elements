import { useLayoutEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function useRedirect() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const enteredMode = searchParams.get("mode");
  const actionCode = searchParams.get("oobCode");

  useLayoutEffect(() => {
    if (enteredMode === "verifyEmail")
      setTimeout(
        () => navigate(`/signupcomplete?actionCode=${actionCode}`),
        100
      );
    if (enteredMode === "resetPassword")
      setTimeout(
        () => navigate(`/changepassword?actionCode=${actionCode}`),
        100
      );
  }, [actionCode, enteredMode, searchParams, navigate]);
  return {};
}
