import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ExternalContext } from "../../../../providers/external-provider";

export default function useForgetForm() {
  const [forgetData, setForgetData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const router = useRouter();

  return {
    forgetData,
    setForgetData,
    modalMsg,
    setModalMsg,
    externalList,
    handleExternalList,
    router,
  };
}
