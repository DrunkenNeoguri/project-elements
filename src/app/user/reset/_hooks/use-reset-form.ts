import { useState } from "react";

export default function useResetForm() {
  const [resetData, setResetData] = useState<Record<string, string>>({});

  return { resetData, setResetData };
}
