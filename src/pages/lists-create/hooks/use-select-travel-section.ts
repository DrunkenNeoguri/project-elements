import { useAtom } from "jotai";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TravelCaseType } from "../../../common/types/template";

export default function useSelectTravelSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [travelListData, setTravelListData] = useAtom(travelInfoDataAtom);
  const navigate = useNavigate();

  const updateTravelTypeAndMoveToNextStep = (travelCase: TravelCaseType) => {
    if (travelCase === "domestic") {
      setTravelListData({ ...travelListData, travelType: "domestic" });
    }
    if (travelCase === "foreign") {
      setTravelListData({ ...travelListData, travelType: "foreign" });
    }
    searchParams.set("step", "2");
    return setSearchParams(searchParams);
  };

  const backToMainPage = () => {
    return navigate("/main");
  };
  return { updateTravelTypeAndMoveToNextStep, backToMainPage };
}
