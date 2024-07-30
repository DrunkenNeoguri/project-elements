import { Dispatch, useContext } from "react";
import BottomSheet from "../../../../components/bottom-sheet/bottom-sheet";
import { SetStateAction } from "jotai";
import { ExternalContext } from "../../../../providers/external-provider";

type CategoryBottomSheetPropsType = {
  bottomSheetData: Record<string, string>;
  setBottomSheetData: Dispatch<SetStateAction<Record<string, string>>>;
};

export default function CreateCategoryBottomSheet(
  props: CategoryBottomSheetPropsType
) {
  const { bottomSheetData, setBottomSheetData } = props;

  const { externalList, handleExternalList } = useContext(ExternalContext);

  const handleSwitchCategoryBottomSheet = () => {
    handleExternalList("element-create-category");
  };

  return (
    externalList.has("element-create-category") && (
      <BottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
        onClose={handleSwitchCategoryBottomSheet}
      >
        <h3 className="font-bold16 px-4">카테고리 추가</h3>
        <div className="flex flex-col items-start w-full px-4 my-3">
          <BottomSheet.Label>카테고리명</BottomSheet.Label>
          <BottomSheet.Input id="categoryName" />
        </div>
        <div className="flex flex-col items-start w-full px-4 my-3">
          <BottomSheet.Label>색상</BottomSheet.Label>
          <BottomSheet.Palette />
        </div>
        <div className="flex w-full gap-4 px-4 my-3">
          <BottomSheet.Button
            colorTheme="invalidReverse"
            onClick={handleSwitchCategoryBottomSheet}
          >
            취소
          </BottomSheet.Button>
          <BottomSheet.Button colorTheme="primary">추가</BottomSheet.Button>
        </div>
      </BottomSheet>
    )
  );
}
