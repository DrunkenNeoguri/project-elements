"use client";
import { useState } from "react";
import CategoryBottomSheet from "./_components/category-bottom-sheet";
import ElementHeader from "./_components/element-header";
import useTravelCreate from "./_hooks/use-travel-create";

export default function ElementCreate() {
  const { travelData } = useTravelCreate();
  const [bottomSheetData, setBottomSheetData] = useState<
    Record<string, string>
  >({});

  return (
    <>
      <ElementHeader
        title={travelData?.title}
        departureAt={travelData?.departureAt}
        travelPeriod={travelData?.travelPeriod}
      />
      {/* <CategoryBottomSheet
        isOpen={state}
        setIsOpen={() => setState(!state)}
        bottomSheetData={data}
        setBottomSheetData={setData}
      /> */}
      <CategoryBottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
      />
    </>
  );
}
