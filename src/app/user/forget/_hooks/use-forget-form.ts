import { useState } from "react";

export default function useForgetForm() {
  const [forgetData, setForgetData] = useState<Record<string, string>>({});

  return { forgetData, setForgetData };
}
