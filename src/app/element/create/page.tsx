"use client";
import { useState } from "react";
import ElementHeader from "./_components/element-header";
import useTravelCreate from "./_hooks/use-travel-create";
import ElementsSection from "./_components/elements-section";
import ListOptionBottomSheet from "./_components/bottom-sheet/list-option-bottom-sheet";
import ElementOptionBottomSheet from "./_components/bottom-sheet/element-option-bottom-sheet";
import CategoryOptionBottomSheet from "./_components/bottom-sheet/category-option-bottom-sheet";
import EditCategoryBottomSheet from "./_components/bottom-sheet/edit-category-bottom-sheet";
import PartProvider from "../../../providers/part-provider";

export default function ElementCreate() {
  const { travelInfo } = useTravelCreate();
  const [bottomSheetData, setBottomSheetData] = useState<
    Record<string, string>
  >({});

  if (!travelInfo) {
    return <></>;
  }

  return (
    <>
      <ElementHeader
        title={travelInfo.title}
        departureAt={travelInfo.departureAt}
        travelPeriod={travelInfo.travelPeriod}
      />
      <PartProvider>
        <ElementsSection />
        {/* <SelectStaffBottomSheet
          bottomSheetData={bottomSheetData}
          setBottomSheetData={setBottomSheetData}
        /> */}
        <EditCategoryBottomSheet />
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
      </PartProvider>
    </>
  );
}
