"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { CategoryBasicType, ElementBasicType } from "../types/element.types";
import { ElementStateType } from "../components/element/element";

type PartType =
  | ElementBasicType
  | ElementBasicType
  | (ElementBasicType & {
      setState: Dispatch<SetStateAction<ElementStateType>>;
    })
  | CategoryBasicType
  | null;

type PartContextType = {
  part: PartType;
  handleSetPart: (part: PartType) => void;
};

export const PartContext = createContext<PartContextType>({
  part: null,
  handleSetPart: () => {},
});

export default function PartProvider({ children }: { children: ReactNode }) {
  const [part, setPart] = useState<PartType>(null);

  const handleSetPart = (currentPart: PartType) => {
    setPart(currentPart);
  };

  return (
    <PartContext.Provider value={{ part, handleSetPart }}>
      {children}
    </PartContext.Provider>
  );
}
