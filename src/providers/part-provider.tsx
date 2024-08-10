"use client";
import { ReactNode, createContext, useState } from "react";
import { CategoryBasicType, ElementBasicType } from "../types/element.types";

type PartContextType = {
  part: ElementBasicType | CategoryBasicType | null;
  handlSetPart: (part: ElementBasicType | CategoryBasicType) => void;
};

export const PartContext = createContext<PartContextType>({
  part: null,
  handlSetPart: () => {},
});

export default function PartProvider({ children }: { children: ReactNode }) {
  const [part, setPart] = useState<ElementBasicType | CategoryBasicType | null>(
    null
  );

  const handlSetPart = (currentPart: ElementBasicType | CategoryBasicType) => {
    setPart(currentPart);
  };

  return (
    <PartContext.Provider value={{ part, handlSetPart }}>
      {children}
    </PartContext.Provider>
  );
}
