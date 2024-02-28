import { atom } from "jotai";
import { TravelInfoProp } from "../types/index.type";

const initialValue: TravelInfoProp = {
  travelType: "domestic",
  title: "",
  departureAt: "",
  travelPeriod: "",
  destination: "",
};

export const travelInfoDataAtom = atom<TravelInfoProp>(initialValue);
