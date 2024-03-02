import { useAtom } from "jotai";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TravelCaseType } from "../../../common/types/template";

export default function useSelectTravelSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [travelInfoData, setTravelInfoData] = useAtom(travelInfoDataAtom);
  const navigate = useNavigate();

  const updateTravelTypeAndMoveToNextStep = (travelCase: TravelCaseType) => {
    if (travelCase === "domestic") {
      setTravelInfoData({ ...travelInfoData, travelType: "domestic" });
    }
    if (travelCase === "foreign") {
      setTravelInfoData({ ...travelInfoData, travelType: "foreign" });
    }
    searchParams.set("step", "2");
    return setSearchParams(searchParams);
  };

  const backToMainPage = () => {
    return navigate("/main");
  };
  return { updateTravelTypeAndMoveToNextStep, backToMainPage };
}
