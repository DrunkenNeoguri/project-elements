"use client";
import { useContext } from "react";
import ElementHeader from "./_components/element-header";
import useTravelEdit from "./_hooks/use-travel-edit";
import ElementsSection from "./_components/elements-section";
import Backdrop from "../../../../components/backdrop/backdrop";
import { Bar } from "../../../../components/loader/loader";

import CategoryOptionBottomSheet from "./_components/bottom-sheet/category-option-bottom-sheet";
import EditTravelInfoBottomSheet from "./_components/bottom-sheet/edit-travel-info-bottom-sheet";
import EditCategoryBottomSheet from "./_components/bottom-sheet/edit-category-bottom-sheet";
import ElementOptionBottomSheet from "./_components/bottom-sheet/element-option-bottom-sheet";
import ElementsOptionBottomSheet from "./_components/bottom-sheet/elements-option-bottom-sheet";

import { ElementsContext } from "../../../../providers/elements-provider";
import PartProvider from "../../../../providers/part-provider";

export default function ElementEdit() {
  useTravelEdit();
  const { state } = useContext(ElementsContext);

  return (
    <>
      {state.elements.length === 0 && (
        <Backdrop colorTheme="loader" disabled>
          <Bar />
        </Backdrop>
      )}
      <ElementHeader
        title={state?.info.title}
        departureAt={state?.info.departureAt}
        travelPeriod={state?.info.travelPeriod}
      />
      <PartProvider>
        <ElementsSection elements={state.elements} />
        {/* <SelectStaffBottomSheet /> */}
        <EditCategoryBottomSheet />
        <EditTravelInfoBottomSheet />
        <ElementsOptionBottomSheet />
        <ElementOptionBottomSheet />
        <CategoryOptionBottomSheet />
      </PartProvider>
    </>
  );
}
