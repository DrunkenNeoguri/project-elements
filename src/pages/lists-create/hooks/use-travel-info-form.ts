import { useState } from "react";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { useAtom } from "jotai";
import { useSearchParams } from "react-router-dom";
import { TravelInfoType } from "../../../common/types/template";
import { isNotFullInputedInForm } from "../policies/travel-info-form";

export default function useTravelInfoForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [travelInfoData, setTraveInfoData] = useAtom(travelInfoDataAtom);
  const { travelType, title, departureAt, travelPeriod, destination } =
    travelInfoData;

  const [formInput, setFormInput] = useState<TravelInfoType>({
    travelType: travelType,
    title: title,
    departureAt: departureAt,
    travelPeriod: travelPeriod,
    destination: destination,
  });

  const updateTravelInfoData = () => {
    if (isNotFullInputedInForm(formInput)) {
      return;
    } else {
      setTraveInfoData({ ...travelInfoData, ...formInput });
      searchParams.set("step", "3");
      return setSearchParams(searchParams);
    }
  };

  const backToPreviousStep = () => {
    searchParams.set("step", "1");
    return setSearchParams(searchParams);
  };

  return { formInput, setFormInput, updateTravelInfoData, backToPreviousStep };
}
