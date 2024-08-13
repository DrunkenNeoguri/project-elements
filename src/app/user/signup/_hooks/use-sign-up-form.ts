import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ExternalContext } from "../../../../providers/external-provider";

export default function useSignUpForm() {
  const [signUpData, setSignUpData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const router = useRouter();

  return {
    signUpData,
    setSignUpData,
    modalMsg,
    setModalMsg,
    externalList,
    handleExternalList,
    router,
  };
}
