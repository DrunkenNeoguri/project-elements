import { Dispatch, useContext } from "react";
import BottomSheet from "../../../../components/bottom-sheet/bottom-sheet";
import { SetStateAction } from "jotai";
import { ExternalContext } from "../../../../providers/external-provider";

type SelectBottomSheetPropsType = {
  bottomSheetData: Record<string, string>;
  setBottomSheetData: Dispatch<SetStateAction<Record<string, string>>>;
};

export default function ElementOptionBottomSheet(
  props: SelectBottomSheetPropsType
) {
  const { bottomSheetData, setBottomSheetData } = props;
  const { externalList, handleExternalList } = useContext(ExternalContext);

  const handleSwitchSelectBottomSheet = () => {
    handleExternalList("element-create-selectElement");
  };

  const handleSwitchSelectStaffBottomSheet = () => {
    handleExternalList("element-create-selectStaff");
  };

  return (
    externalList.has("element-create-selectElement") && (
      <BottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
        onClose={handleSwitchSelectBottomSheet}
      >
        <div className="flex flex-col items-start w-full px-4 my-3">
          <BottomSheet.Select onClick={handleSwitchSelectStaffBottomSheet}>
            담당자 지정
          </BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />
          <BottomSheet.Select>준비물 수정</BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />
          <BottomSheet.Select colorTheme="warning">
            준비물 삭제
          </BottomSheet.Select>
        </div>
      </BottomSheet>
    )
  );
}
