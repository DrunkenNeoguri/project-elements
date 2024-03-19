import { FormEvent, useState } from "react";
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

  const updateTravelInfoData = (e: FormEvent) => {
    if (isNotFullInputedInForm(formInput)) {
      return;
    } else {
      setTraveInfoData({ ...travelInfoData, ...formInput });
      searchParams.set("step", "3");
      setSearchParams(searchParams);
      return e.preventDefault();
    }
  };

  const backToPreviousStep = () => {
    searchParams.set("step", "1");
    return setSearchParams(searchParams);
  };

  const increaseTravelPeriod = (maxCount: number) => {
    const currentCount = formInput.travelPeriod;
    if (currentCount >= maxCount) {
      return;
    }
    return setFormInput({
      ...formInput,
      travelPeriod: currentCount + 1,
    });
  };

  const decreaseTravelPeriod = (minCount: number) => {
    const currentCount = formInput.travelPeriod;
    if (currentCount <= minCount) {
      return;
    }
    return setFormInput({
      ...formInput,
      travelPeriod: currentCount - 1,
    });
  };

  return {
    formInput,
    setFormInput,
    updateTravelInfoData,
    backToPreviousStep,
    increaseTravelPeriod,
    decreaseTravelPeriod,
  };
}
