import { useSearchParams } from "react-router-dom";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { useAtom } from "jotai";

export default function useConfirmTravelInfoSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [travelListData] = useAtom(travelInfoDataAtom);

  const backToPreviousStep = () => {
    searchParams.set("step", "2");
    setSearchParams(searchParams);
  };

  const moveToNextStep = () => {
    searchParams.set("step", "4");
    setSearchParams(searchParams);
  };

  return { travelListData, moveToNextStep, backToPreviousStep };
}
