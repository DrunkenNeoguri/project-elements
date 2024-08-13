"use client";
import { createContext, PropsWithChildren, useState } from "react";

type ExternalContextType = {
  externalList: Set<string>;
  handleExternalList: (key: string) => void;
};

export const ExternalContext = createContext<ExternalContextType>({
  externalList: new Set([]),
  handleExternalList: (key: string) => key,
});

export default function ExternalProvider(props: PropsWithChildren) {
  const { children } = props;
  const [externalList, setExternalList] = useState<Set<string>>(new Set([]));

  const handleExternalList = (newKey: string) => {
    if (externalList.has(newKey)) {
      setExternalList((prev) => {
        const newExternalList = new Set(prev);
        newExternalList.delete(newKey);

        if (newExternalList.size === 0) {
          document.body.style.overflow = "auto";
        }

        return newExternalList;
      });
    } else {
      document.body.style.overflow = "hidden";
      setExternalList((prev) => new Set(prev).add(newKey));
    }
  };

  return (
    <ExternalContext.Provider value={{ externalList, handleExternalList }}>
      {children}
    </ExternalContext.Provider>
  );
}
