import { useAtom } from "jotai";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TravelType } from "../../../common/types/template";

export default function useSelectTravelSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [travelListData, setTravelListData] = useAtom(travelInfoDataAtom);
  const navigate = useNavigate();

  const setTravelTypeAndMoveNextStep = (travelType: TravelType) => {
    if (travelType === "domestic") {
      setTravelListData({ ...travelListData, travelType: "domestic" });
    }
    if (travelType === "foreign") {
      setTravelListData({ ...travelListData, travelType: "foreign" });
    }
    searchParams.set("step", "2");
    setSearchParams(searchParams);
  };

  const backToMainPage = () => {
    navigate("/main");
  };
  return { setTravelTypeAndMoveNextStep, backToMainPage };
}
