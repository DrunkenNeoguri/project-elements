"use client";
import { Dispatch, PropsWithChildren, createContext } from "react";
import Backdrop from "../backdrop/backdrop";
import Portal from "../portal/portal";
import Input from "../input/input";
import Label from "../label/label";
import Select from "../select/select";
import Button from "../button/button";
import Palette from "../palette/palette";
import { SetStateAction } from "jotai";

// Bottom Sheet Context API
type BottomSheetContextType = {
  bottomSheetData: Record<string, string>;
  handleBottomSheetData: (name: string, value: string) => void;
};

export const BottomSheetContext = createContext<
  BottomSheetContextType | undefined
>(undefined);

// Bottom Sheet
type BottomSheetPropType = PropsWithChildren & {
  bottomSheetData: Record<string, string>;
  setBottomSheetData: Dispatch<SetStateAction<Record<string, string>>>;
};

export default function BottomSheet(props: BottomSheetPropType) {
  const { children, bottomSheetData, setBottomSheetData } = props;

  const handleBottomSheetData = (name: string, value: string) => {
    setBottomSheetData({ ...bottomSheetData, [name]: value });
  };

  return (
    <BottomSheetContext.Provider
      value={{ bottomSheetData, handleBottomSheetData }}
    >
      <Portal container={document.body}>
        <Backdrop>
          <div className="flex flex-col justify-center items-center fixed bottom-0 bg-white font-gmarketSans text-center border-none rounded-t-lg w-fill max-h-[368px] pt-6 pb-4 z-20 drop-shadow-[4px_4px_8px_#0000004D]">
            {children}
          </div>
        </Backdrop>
      </Portal>
    </BottomSheetContext.Provider>
  );
}

BottomSheet.Input = Input;
BottomSheet.Label = Label;
BottomSheet.Select = Select;
BottomSheet.Button = Button;
BottomSheet.Palette = Palette;