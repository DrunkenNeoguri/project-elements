"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
} from "react";
import Backdrop from "../backdrop/backdrop";
import Portal from "../portal/portal";
import Input from "../input/input";
import Label from "../label/label";
import Select from "../select/select";
import Button from "../button/button";
import Palette from "../palette/palette";

/* eslint-disable @typescript-eslint/no-explicit-any */

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
  bottomSheetData: Record<string, any>;
  setBottomSheetData: Dispatch<SetStateAction<Record<string, any>>>;
  onClose: () => void;
};

export default function BottomSheet(props: BottomSheetPropType) {
  const { children, bottomSheetData, setBottomSheetData, onClose } = props;

  const handleBottomSheetData = (name: string, value: string) => {
    setBottomSheetData({ ...bottomSheetData, [name]: value });
  };

  return (
    <BottomSheetContext.Provider
      value={{ bottomSheetData, handleBottomSheetData }}
    >
      <Portal container={document.body}>
        <div className="flex flex-col justify-center items-start fixed bottom-0 bg-white font-gmarketSans text-center border-none rounded-t-lg w-full max-w-[379px] max-h-[368px] pt-6 pb-4 z-[60] drop-shadow-[0_-4px_4px_#0000004D]">
          {children}
        </div>
        <Backdrop onClick={onClose} />
      </Portal>
    </BottomSheetContext.Provider>
  );
}

BottomSheet.Input = Input;
BottomSheet.Label = Label;
BottomSheet.Select = Select;
BottomSheet.Button = Button;
BottomSheet.Palette = Palette;
