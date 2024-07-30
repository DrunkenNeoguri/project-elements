import { Dispatch, useContext } from "react";
import BottomSheet from "../../../../components/bottom-sheet/bottom-sheet";
import { SetStateAction } from "jotai";
import { ExternalContext } from "../../../../providers/external-provider";

type SelectBottomSheetPropsType = {
  bottomSheetData: Record<string, string>;
  setBottomSheetData: Dispatch<SetStateAction<Record<string, string>>>;
};

export default function CategoryOptionBottomSheet(
  props: SelectBottomSheetPropsType
) {
  const { bottomSheetData, setBottomSheetData } = props;
  const { externalList, handleExternalList } = useContext(ExternalContext);

  const handleSwitchSelectBottomSheet = () => {
    handleExternalList("element-create-selectCategory");
  };

  const handleSwitchCategoryBottomSheet = () => {
    handleExternalList("element-create-category");
  };

  return (
    externalList.has("element-create-selectCategory") && (
      <BottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
        onClose={handleSwitchSelectBottomSheet}
      >
        <div className="flex flex-col items-start w-full px-4 my-3">
          <BottomSheet.Select onClick={handleSwitchCategoryBottomSheet}>
            카테고리 수정
          </BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />
          <BottomSheet.Select colorTheme="warning">
            카테고리 삭제
          </BottomSheet.Select>
        </div>
      </BottomSheet>
    )
  );
}
