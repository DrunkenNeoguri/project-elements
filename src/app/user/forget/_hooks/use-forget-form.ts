import { useState } from "react";

export default function useForgetForm() {
  const [emailData, setEmailData] = useState<Record<string, string>>({});

  return { emailData, setEmailData };
}
