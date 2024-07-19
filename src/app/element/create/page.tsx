"use client";
import { useState } from "react";
import CategoryBottomSheet from "./_components/category-bottom-sheet";
import ElementHeader from "./_components/element-header";
import useTravelCreate from "./_hooks/use-travel-create";
import ElementsSection from "./_components/list-section";

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

      <CategoryBottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
      />
    </>
  );
}
