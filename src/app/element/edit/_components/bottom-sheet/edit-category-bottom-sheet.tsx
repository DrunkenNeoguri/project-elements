import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import BottomSheet from "../../../../../components/bottom-sheet/bottom-sheet";
import { ExternalContext } from "../../../../../providers/external-provider";
import { PartContext } from "../../../../../providers/part-provider";
import { CategoryBasicType } from "../../../../../types/element.types";
import { ElementsContext } from "../../../../../providers/elements-provider";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function EditCategoryBottomSheet() {
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const { part, handleSetPart } = useContext(PartContext);
  const { dispatch } = useContext(ElementsContext);

  const [categoryData, setCategoryData] = useState<CategoryBasicType | null>(
    null
  );

  const handleSwitchCategoryBottomSheet = () => {
    if (externalList.has("element-create-category")) {
      handleExternalList("element-create-category");
    } else if (externalList.has("element-update-category")) {
      handleExternalList("element-update-category");
      handleExternalList("element-option-category");
    }
    handleSetPart(null);
    setCategoryData(null);
  };

  const handleSetCategory = () => {
    if (externalList.has("element-create-category")) {
      dispatch({
        type: "createCategory",
        target: categoryData as CategoryBasicType,
      });
    } else if (externalList.has("element-update-category")) {
      dispatch({
        type: "updateCategory",
        target: categoryData as CategoryBasicType,
      });
    }
    handleSwitchCategoryBottomSheet();
  };

  const handleChangeCategoryName = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryData({
      ...(categoryData as CategoryBasicType),
      categoryName: e.currentTarget.value,
    });
  };

  useEffect(() => {
    if (
      externalList.has("element-create-category") ||
      externalList.has("element-update-category")
    ) {
      setCategoryData(part as CategoryBasicType);
    }
  }, [part, externalList]);

  if (!categoryData) {
    return;
  }

  return (
    (externalList.has("element-create-category") ||
      externalList.has("element-update-category")) && (
      <BottomSheet
        bottomSheetData={categoryData as Record<string, any>}
        setBottomSheetData={
          setCategoryData as Dispatch<SetStateAction<Record<string, any>>>
        }
        onClose={handleSwitchCategoryBottomSheet}
      >
        <h3 className="font-bold16 px-4">카테고리 추가</h3>
        <div className="flex flex-col items-start w-full px-4 my-3">
          <BottomSheet.Label>카테고리명</BottomSheet.Label>
          <BottomSheet.Input
            id="categoryName"
            value={categoryData.categoryName}
            onChange={handleChangeCategoryName}
          />
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
          <BottomSheet.Button
            type="button"
            colorTheme="primary"
            onClick={handleSetCategory}
          >
            추가
          </BottomSheet.Button>
        </div>
      </BottomSheet>
    )
  );
}
