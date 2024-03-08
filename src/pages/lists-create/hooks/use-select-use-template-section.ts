import { useNavigate, useSearchParams } from "react-router-dom";
import { firebaseAuth, firestore } from "../../../utils/util-firebase";
import { collection, doc, writeBatch } from "firebase/firestore";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { useAtom } from "jotai";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import { isFullInputedInTravelInfoData } from "../policies/select-use-template-section";
import { setTravelTemplateByTravelTypeAndUserWanted } from "../utils/select-use-template-section";

export default function useSelectUseTemplateSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [travelInfoData] = useAtom(travelInfoDataAtom);
  const navigate = useNavigate();

  const backToPreviousStep = () => {
    searchParams.set("step", "3");
    return setSearchParams(searchParams);
  };

  const postListCreateProcess = async (useTemplate: boolean) => {
    try {
      if (!isFullInputedInTravelInfoData(travelInfoData)) {
        throw new Error(
          "내용이 전부 기입되지 않았습니다. 빠진 내용을 확인해주세요."
        );
      }

      const userUid = firebaseAuth.currentUser?.uid;
      const currentTime = `${Date.now()}`;
      const { travelType } = travelInfoData;
      const template = setTravelTemplateByTravelTypeAndUserWanted(
        travelType,
        useTemplate
      );
      const batch = writeBatch(firestore);

      if (!userUid) {
        throw new Error("유저 정보가 없습니다. 데이터를 생성할 수 없습니다.");
      }

      const travelsReference = doc(
        collection(firestore, `travels`, userUid, "docs"),
        currentTime
      );

      const ListsReference = doc(
        collection(firestore, `lists`, userUid, "docs"),
        currentTime
      );

      await batch.set(travelsReference, {
        ...travelInfoData,
        id: `${userUid}${currentTime}`,
      });
      await batch.set(ListsReference, {
        ...template,
        id: `${userUid}${currentTime}`,
      });

      const commitState = await batch.commit();
      // undefined가 뜨면 OK
      if (commitState === undefined) {
        navigate(`/lists/main?id=${currentTime}`);
      }
    } catch (error) {
      convertUnknownTypeErrorToStringMessage(error);
    }
    return;
  };
  return { backToPreviousStep, postListCreateProcess };
}
