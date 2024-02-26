import { useState } from "react";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { TravelInfoProp } from "../types/index.type";
import { useAtom } from "jotai";
import { useSearchParams } from "react-router-dom";

export default function useTravelInfoForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [travelListData, setTravelListData] = useAtom(travelInfoDataAtom);
  const [formData, setFormData] = useState<TravelInfoProp>({
    travelType: travelListData.travelType,
    title: "",
    departureAt: "",
    travelPeriod: "",
    destination: "",
  });

  const updateTravelListData = () => {
    setTravelListData({ ...travelListData, ...formData });
    searchParams.set("step", "3");
    setSearchParams(searchParams);
  };

  const backToPreviousStep = () => {
    searchParams.set("step", "1");
    setSearchParams(searchParams);
  };

  return { formData, setFormData, updateTravelListData, backToPreviousStep };
}
