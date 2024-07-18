import { createContext, PropsWithChildren, useState } from "react";

type ExternalContextType = {
  externalList: string[];
  handleExternalList?: (key: string) => void;
};

export const ExternalContext = createContext<ExternalContextType>({
  externalList: [],
});

export default function ExternalProvider(props: PropsWithChildren) {
  const { children } = props;
  const [externalList, setExternalList] = useState<string[]>([]);

  const handleExternalList = (newKey: string) => {
    let newExternalList = [...externalList];
    if (newExternalList.includes(newKey)) {
      newExternalList = newExternalList.filter(
        (existentKey) => existentKey !== newKey
      );
    } else {
      newExternalList.push(newKey);
    }
    setExternalList(newExternalList);
  };

  return (
    <ExternalContext.Provider value={{ externalList, handleExternalList }}>
      {children}
    </ExternalContext.Provider>
  );
}
