import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useState } from 'react';
import { ExternalContext } from '../../../../providers/external-provider';

export default function useResetForm() {
  const [resetData, setResetData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams.get('access_token');
  const refreshToken = searchParams.get('refresh_token');

  if (!accessToken || !refreshToken) {
    throw new Error('Access token and refresh token are required for password reset.');
  }

  return {
    resetData,
    setResetData,
    modalMsg,
    setModalMsg,
    externalList,
    handleExternalList,
    router,
    accessToken,
    refreshToken,
  };
}
