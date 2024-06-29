import { atom } from "jotai";
import { TravelInfoType } from "../../../types/template.types";

const initialValue: TravelInfoType = {
  travelType: "domestic",
  title: "",
  departureAt: "",
  travelPeriod: 1,
  destination: "",
};

export const travelInfoDataAtom = atom<TravelInfoType>(initialValue);
