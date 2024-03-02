import { useNavigate, useSearchParams } from "react-router-dom";
import { firebaseAuth, firestore } from "../../../utils/util-firebase";
import { collection, doc, writeBatch } from "firebase/firestore";
import { foreignTemplate } from "../../../utils/util-template";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { useAtom } from "jotai";
import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";

export default function useSelectUseTemplateSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [travelInfoData] = useAtom(travelInfoDataAtom);
  const navigate = useNavigate();

  const backToPreviousStep = () => {
    searchParams.set("step", "2");
    return setSearchParams(searchParams);
  };

  const postListCreateProcess = async () => {
    try {
      const userUid = firebaseAuth.currentUser?.uid;
      const currentTime = `${new Date().getTime()}`;
      const batch = writeBatch(firestore);
      if (!userUid) {
        throw new Error("아이디 없음");
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
        ...foreignTemplate,
        id: `${userUid}${currentTime}`,
      });
      await batch.set(ListsReference, {
        ...travelInfoData,
        id: `${userUid}${currentTime}`,
      });
      const commitState = await batch.commit();
      // undefined가 뜨면 무사 처리
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
