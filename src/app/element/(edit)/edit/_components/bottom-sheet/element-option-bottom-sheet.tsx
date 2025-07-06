import { Dispatch, SetStateAction, useContext, useState } from 'react';
import BottomSheet from '../../../../../../components/bottom-sheet/bottom-sheet';
import { ExternalContext } from '../../../../../../providers/external-provider';
import { PartContext } from '../../../../../../providers/part-provider';
import { ElementBasicType } from '../../../../../../types/element.types';
import { ElementStateType } from '../../../../../../components/element/element';
import { ElementsContext } from '../../../../../../providers/elements-provider';

export default function ElementOptionBottomSheet() {
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const { dispatch } = useContext(ElementsContext);
  const { part, handleSetPart } = useContext(PartContext);
  const [bottomSheetData, setBottomSheetData] = useState<Record<string, string>>({});

  const handleSwitchSelectBottomSheet = () => {
    handleExternalList('element-option-element');
  };

  const handleSwitchUpdateElement = () => {
    const { setState } = part as ElementBasicType & {
      setState: Dispatch<SetStateAction<ElementStateType>>;
    };
    setState('modify');
    handleSwitchSelectBottomSheet();
  };

  const handleSwitchDeleteElement = () => {
    const { setState, ...rest } = part as ElementBasicType & {
      setState: Dispatch<SetStateAction<ElementStateType>>;
    };
    dispatch({
      type: 'deleteElement',
      target: { ...rest },
    });
    handleSwitchSelectBottomSheet();
    setState('base');
    handleSetPart(null);
  };

  // *MEMO: 담당자 지정은 추후의 개발 스펙임.
  // const handleSwitchSelectStaffBottomSheet = () => {
  //   handleExternalList("element-create-selectStaff");
  // };

  return (
    externalList.has('element-option-element') && (
      <BottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
        onClose={handleSwitchSelectBottomSheet}
      >
        <div className="flex flex-col items-start w-full px-4 my-3">
          {/* <BottomSheet.Select onClick={handleSwitchSelectStaffBottomSheet}>
            담당자 지정
          </BottomSheet.Select>
          <div className="h-[1px] w-full bg-grey" /> */}
          <BottomSheet.Select onClick={handleSwitchUpdateElement}>준비물 수정</BottomSheet.Select>
          <div className="h-[1px] w-full bg-grey" />
          <BottomSheet.Select colorTheme="warning" onClick={handleSwitchDeleteElement}>
            준비물 삭제
          </BottomSheet.Select>
        </div>
      </BottomSheet>
    )
  );
}
