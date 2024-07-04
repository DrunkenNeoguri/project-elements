import { useState } from "react";

export default function useForgetForm() {
  const [forgetData, setForgetData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();

  return { forgetData, setForgetData, modalMsg, setModalMsg };
}
