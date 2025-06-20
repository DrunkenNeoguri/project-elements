import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { ExternalContext } from '../../../../providers/external-provider';

export default function useLoginOauth() {
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const router = useRouter();

  return { modalMsg, setModalMsg, externalList, handleExternalList, router };
}
