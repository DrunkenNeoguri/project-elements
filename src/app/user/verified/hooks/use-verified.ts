import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ExternalContext } from "../../../../providers/external-provider";

export default function useVerified() {
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const router = useRouter();

  return { externalList, handleExternalList, router };
}
