import { useState } from "react";

export default function useChangePassword() {
  const [pageState, setPageState] = useState("InProgress");
  return { pageState, setPageState };
}
