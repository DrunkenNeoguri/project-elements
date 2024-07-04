import { useState } from "react";

export default function useResetForm() {
  const [resetData, setResetData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();

  return { resetData, setResetData, modalMsg, setModalMsg };
}
