import { atom } from "jotai";
import { TravelInfoProp } from "../../../common/types/template";

const initialValue: TravelInfoProp = {
  travelType: "domestic",
  title: "",
  departureAt: "",
  travelPeriod: "",
  destination: "",
};

export const travelInfoDataAtom = atom<TravelInfoProp>(initialValue);
