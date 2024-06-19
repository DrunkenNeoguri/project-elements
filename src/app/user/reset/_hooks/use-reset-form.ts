import { useState } from "react";

export default function useResetForm() {
  const [pwData, setPwData] = useState<Record<string, string>>({});

  return { pwData, setPwData };
}
