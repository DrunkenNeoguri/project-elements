import { Dispatch, SetStateAction, useContext } from "react";
import BottomSheet from "../../../../../components/bottom-sheet/bottom-sheet";
import { ExternalContext } from "../../../../../providers/external-provider";
import { PartContext } from "../../../../../providers/part-provider";
import { ElementsContext } from "../../../../../providers/elements-provider";
import { CategoryBasicType } from "../../../../../types/element.types";

type SelectBottomSheetPropsType = {
  bottomSheetData: Record<string, string>;
  setBottomSheetData: Dispatch<SetStateAction<Record<string, string>>>;
};

export default function CategoryOptionBottomSheet(
  props: SelectBottomSheetPropsType
) {
  const { bottomSheetData, setBottomSheetData } = props;
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const { dispatch } = useContext(ElementsContext);
  const { part, handleSetPart } = useContext(PartContext);

  const handleSwitchOptionBottomSheet = () => {
    handleExternalList("element-option-category");
    handleSetPart(null);
  };

  const handleOpenUpdateBottomSheet = () => {
    handleExternalList("element-update-category");
  };

  const handleDeleteCategory = () => {
    dispatch({
      type: "deleteCategory",
      target: part as CategoryBasicType,
    });
    handleSwitchOptionBottomSheet();
  };
  // ?CONCERN: 여기서는 setBottomSheetData가 필요하지 않은데.. 어떻게 할까..

  return (
    externalList.has("element-option-category") && (
      <BottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
        onClose={handleSwitchOptionBottomSheet}
      >
        <div className="flex flex-col items-start w-full px-4 my-3">
          <BottomSheet.Select onClick={handleOpenUpdateBottomSheet}>
            카테고리 수정
          </BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />
          <BottomSheet.Select
            colorTheme="warning"
            onClick={handleDeleteCategory}
          >
            카테고리 삭제
          </BottomSheet.Select>
        </div>
      </BottomSheet>
    )
  );
}
