import { atom } from "jotai";
import { TravelInfoType } from "../../../common/types/template";

const initialValue: TravelInfoType = {
  travelType: "domestic",
  title: "",
  departureAt: "",
  travelPeriod: "",
  destination: "",
};

export const travelInfoDataAtom = atom<TravelInfoType>(initialValue);
