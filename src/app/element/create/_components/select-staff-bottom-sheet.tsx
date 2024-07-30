import { Dispatch, useContext } from "react";
import { ExternalContext } from "../../../../providers/external-provider";
import BottomSheet from "../../../../components/bottom-sheet/bottom-sheet";
import { SetStateAction } from "jotai";

type SelectBottomSheetPropsType = {
  bottomSheetData: Record<string, string>;
  setBottomSheetData: Dispatch<SetStateAction<Record<string, string>>>;
};

export default function SelectStaffBottomSheet(
  props: SelectBottomSheetPropsType
) {
  const { bottomSheetData, setBottomSheetData } = props;
  const { externalList, handleExternalList } = useContext(ExternalContext);

  const handleSwitchSelectBottomSheet = () => {
    handleExternalList("element-create-selectStaff");
  };

  return (
    externalList.has("element-create-selectStaff") && (
      <BottomSheet
        bottomSheetData={bottomSheetData}
        setBottomSheetData={setBottomSheetData}
        onClose={handleSwitchSelectBottomSheet}
      >
        <div className="flex flex-col items-start w-full px-4 my-3 overflow-scroll">
          <BottomSheet.Select>담당자 A</BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />
          <BottomSheet.Select>담당자 B</BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />{" "}
          <BottomSheet.Select>담당자 C</BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />{" "}
          <BottomSheet.Select>담당자 D</BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />{" "}
          <BottomSheet.Select>담당자 E</BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />{" "}
          <BottomSheet.Select>담당자 F</BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />{" "}
          <BottomSheet.Select>담당자 G</BottomSheet.Select>
          <div className="h-[1px] w-full bg-gray" />
        </div>
      </BottomSheet>
    )
  );
}
