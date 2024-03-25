import { useNavigate } from "react-router-dom";
import { firebaseAuth, firestore } from "../../../utils/util-firebase";
import { collection, doc, writeBatch } from "firebase/firestore";
import { useAtom } from "jotai";
// import { convertUnknownTypeErrorToStringMessage } from "../../../utils/util-convert";
import { isFullInputedInTravelInfoData } from "../policies/select-use-template-section";
import { setTravelTemplateByTravelTypeAndUserWanted } from "../utils/select-use-template-section";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { travelInfoDataAtom } from "../atoms/travel-info-data-atom";
import { moveStepStateAtom } from "../atoms/move-step-state-atom";
import { currentStepAtom } from "../atoms/current-step-atom";
import { moveToStepAndActiveDelay1s } from "../utils/index.util";

export default function useSelectUseTemplateSection() {
  const [travelInfoData] = useAtom(travelInfoDataAtom);
  const [openState, setOpenState] = useState({ state: false, message: "" });
  const [, setMoveState] = useAtom(moveStepStateAtom);
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const navigate = useNavigate();

  const backToPreviousStep = () => {
    setMoveState(true);
    return moveToStepAndActiveDelay1s(() => {
      return setCurrentStep(currentStep - 1);
    });
  };

  const postListCreateProcess = async (useTemplate: boolean) => {
    try {
      if (!isFullInputedInTravelInfoData(travelInfoData)) {
        return setOpenState({
          state: true,
          message: `내용이 전부 기입되지 않았습니다.\n빠진 내용이 있는지 확인 후, 다시 시도해주세요.`,
        });
      }

      const postTravelInfoDataProcess = async (userUid: string) => {
        const db = firestore;
        const currentTime = `${Date.now()}`;
        const { travelType } = travelInfoData;
        const template = setTravelTemplateByTravelTypeAndUserWanted(
          travelType,
          useTemplate
        );

        const batch = writeBatch(db);

        const travelsReference = doc(
          collection(db, `travels`, userUid, "docs"),
          currentTime
        );

        const ListsReference = doc(
          collection(db, `lists`, userUid, "docs"),
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

        if (commitState === undefined) {
          return navigate(`/lists/main?id=${currentTime}`);
        }
      };

      const user = firebaseAuth.currentUser;

      if (user !== null) {
        return postTravelInfoDataProcess(user.uid);
      } else {
        return onAuthStateChanged(firebaseAuth, (user) => {
          if (user) {
            postTravelInfoDataProcess(user.uid);
          } else {
            setOpenState({
              state: true,
              message: `여행 정보를 생성할 수 없습니다.\n\n잠시 후, 다시 시도해주시길 바라며,\n계속 발생될 경우 관리자에게 문의해주세요.`,
            });
          }
        });
      }
    } catch (error) {
      // const errorMessage = convertUnknownTypeErrorToStringMessage(error);
      return setOpenState({
        state: true,
        message: `여행 정보를 생성할 수 없습니다.\n\n잠시 후, 다시 시도해주시길 바라며,\n계속 발생될 경우 관리자에게 문의해주세요.`,
      });
    }
  };
  return { backToPreviousStep, postListCreateProcess, openState, setOpenState };
}
