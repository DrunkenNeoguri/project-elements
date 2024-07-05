import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useResetForm() {
  const [resetData, setResetData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const router = useRouter();

  return { resetData, setResetData, modalMsg, setModalMsg, router };
}
