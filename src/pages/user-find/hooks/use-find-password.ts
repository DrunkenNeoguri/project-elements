import { useState } from "react";

export default function useFindPassword() {
  const [pageState, setPageState] = useState("InProgress");
  return { pageState, setPageState };
}
