"use client";
import { useState } from "react";
import ElementHeader from "./_components/element-header";
import useTravelCreate from "./_hooks/use-travel-create";
import ElementsSection from "./_components/elements-section";
import ListOptionBottomSheet from "./_components/list-option-bottom-sheet";
import ElementOptionBottomSheet from "./_components/element-option-bottom-sheet";
import CategoryOptionBottomSheet from "./_components/category-option-bottom-sheet";
import SelectStaffBottomSheet from "./_components/select-staff-bottom-sheet";
import CreateCategoryBottomSheet from "./_components/create-category-bottom-sheet";

export default function ElementCreate() {
  const { elements } = useTravelCreate();
  const [bottomSheetData, setBottomSheetData] = useState<
    Record<string, string>
  >({});

  return (
    <>
      <ElementHeader
        title={elements?.info.title}
        departureAt={elements?.info.departureAt}
        travelPeriod={elements?.info.travelPeriod}
      />
      <ElementsSection elements={elements?.elements} />
      <SelectStaffBottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
      />
      <CreateCategoryBottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
      />
      <ListOptionBottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
      />
      <ElementOptionBottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
      />
      <CategoryOptionBottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
      />
    </>
  );
}
