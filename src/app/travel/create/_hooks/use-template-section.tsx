import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/auth-provider";
import { ExternalContext } from "../../../../providers/external-provider";

export default function useTemplateSection() {
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const user = useContext(AuthContext);
  const router = useRouter();

  return {
    modalMsg,
    setModalMsg,
    externalList,
    handleExternalList,
    user,
    router,
  };
}
