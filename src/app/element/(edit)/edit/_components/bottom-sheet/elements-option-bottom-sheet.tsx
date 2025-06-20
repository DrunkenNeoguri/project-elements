import { useContext, useState } from 'react';
import BottomSheet from '../../../../../../components/bottom-sheet/bottom-sheet';
import { ExternalContext } from '../../../../../../providers/external-provider';
import { ElementsContext } from '../../../../../../providers/elements-provider';
import { useRouter, useSearchParams } from 'next/navigation';
import ElementService from '../../../../../../services/element-service';
import { AuthContext } from '../../../../../../providers/auth-provider';

export default function ElementsOptionBottomSheet() {
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const { state } = useContext(ElementsContext);
  const user = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const listId = searchParams?.get('id');
  const [bottomSheetData, setBottomSheetData] = useState<Record<string, string>>({});

  const handleSwitchSelectBottomSheet = () => {
    handleExternalList('element-option-elements');
  };

  const handleSwitchTravelInfoBottomSheet = () => {
    handleExternalList('element-update-travel-info');
  };

  const handleUpdateTravelData = async () => {
    try {
      if (user) {
        await ElementService.postElementsData(user?.uid, state.info.id, state);
        return router.push(`/element?id=${listId}`);
      }
    } catch (error) {
      // TODO: 차후 Sentry, 에러 메시지 toast / 현재는 현상 유지
      return;
    }
  };

  const handleDeleteTravelData = async () => {
    if (user) {
      await ElementService.deleteElementsData(user?.uid, state.info.id);
      return router.push('/main');
    }
  };

  return (
    externalList.has('element-option-elements') && (
      <BottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
        onClose={handleSwitchSelectBottomSheet}
      >
        <div className="flex flex-col items-start w-full px-4 my-3">
          <BottomSheet.Select onClick={handleSwitchTravelInfoBottomSheet}>
            여행 정보 수정
          </BottomSheet.Select>
          <div className="h-[1px] w-full bg-grey" />
          <BottomSheet.Select onClick={handleUpdateTravelData}>준비물 목록 저장</BottomSheet.Select>
          <div className="h-[1px] w-full bg-grey" />
          <BottomSheet.Select colorTheme="warning" onClick={handleDeleteTravelData}>
            준비물 목록 삭제
          </BottomSheet.Select>
        </div>
      </BottomSheet>
    )
  );
}
