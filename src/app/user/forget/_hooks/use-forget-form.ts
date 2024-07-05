import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useForgetForm() {
  const [forgetData, setForgetData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const router = useRouter();

  return { forgetData, setForgetData, modalMsg, setModalMsg, router };
}
