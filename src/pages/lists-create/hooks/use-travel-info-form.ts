import { useState } from "react";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { useAtom } from "jotai";
import { useSearchParams } from "react-router-dom";
import { TravelInfoType } from "../../../common/types/template";

export default function useTravelInfoForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [travelInfoData, setTraveInfoData] = useAtom(travelInfoDataAtom);
  const currentTravelType = travelInfoData.travelType;

  const [formInput, setFormInput] = useState<TravelInfoType>({
    travelType: currentTravelType,
    title: "",
    departureAt: "",
    travelPeriod: "",
    destination: "",
  });

  const updateTravelInfoData = () => {
    setTraveInfoData({ ...travelInfoData, ...formInput });
    searchParams.set("step", "3");
    setSearchParams(searchParams);
  };

  const backToPreviousStep = () => {
    searchParams.set("step", "1");
    setSearchParams(searchParams);
  };

  return { formInput, setFormInput, updateTravelInfoData, backToPreviousStep };
}
