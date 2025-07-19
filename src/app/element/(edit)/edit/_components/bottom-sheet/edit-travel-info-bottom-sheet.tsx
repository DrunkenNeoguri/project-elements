import { ChangeEvent, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { ExternalContext } from '../../../../../../providers/external-provider';
import { ElementsContext } from '../../../../../../providers/elements-provider';
import { TravelBasicType, TravelType } from '../../../../../../types/travel.types';
import BottomSheet from '../../../../../../components/bottom-sheet/bottom-sheet';
import ElementService from '../../../../../../services/element-service';
import { AuthContext } from '../../../../../../providers/auth-provider';

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function EditTravelInfoBottomSheet() {
  const { externalList, handleExternalList } = useContext(ExternalContext);
  const { state, dispatch } = useContext(ElementsContext);
  const user = useContext(AuthContext);

  const [travelInfo, setTravelInfo] = useState<TravelBasicType>(
    state?.info ?? {
      id: '',
      travelType: 'domestic',
      title: '',
      departureAt: '',
      travelPeriod: 0,
      destination: '',
    },
  );

  const handleSwitchCategoryBottomSheet = () => {
    handleExternalList('element-update-travel-info');
  };

  const handleUpdataTravelInfo = async () => {
    if (!user) {
      return;
    }

    if (externalList.has('element-update-travel-info')) {
      dispatch({
        type: 'updateTravelInfo',
        target: travelInfo as TravelBasicType,
      });

      await ElementService.postElementsData(user.id, state.info.id, {
        info: travelInfo,
        elements: state.elements,
      });
    }
    handleSwitchCategoryBottomSheet();
    handleExternalList('element-option-elements');
  };

  const handleChangeCategoryName = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setTravelInfo({ ...(travelInfo as TravelBasicType), [id]: value });
  };

  useEffect(() => {
    if (externalList.has('element-update-travel-info')) {
      setTravelInfo(state?.info as TravelBasicType);
    }
  }, [state?.info, externalList]);

  if (!travelInfo) {
    return;
  }

  const handleIncraesePeriod = () => {
    if (travelInfo.travelPeriod >= 0) {
      setTravelInfo(prev => ({
        ...prev,
        travelPeriod: travelInfo.travelPeriod + 1,
      }));
    }
  };

  const handleDecraesePeriod = () => {
    if (travelInfo.travelPeriod > 0) {
      setTravelInfo(prev => ({
        ...prev,
        travelPeriod: travelInfo.travelPeriod - 1,
      }));
    }
  };

  const handleSwitchTravelType = (travelType: TravelType) => {
    setTravelInfo({ ...(travelInfo as TravelBasicType), travelType });
  };

  const domesticButtonStyle =
    travelInfo.travelType !== 'domestic' ? 'border-r-2 border-y-2 border-shadowModal' : '';

  const foreignButtonStyle =
    travelInfo.travelType !== 'foreign' ? 'border-l-2 border-y-2 border-shadowModal' : '';

  return (
    externalList.has('element-update-travel-info') && (
      <BottomSheet
        bottomSheetData={travelInfo as Record<string, any>}
        setBottomSheetData={setTravelInfo as Dispatch<SetStateAction<Record<string, any>>>}
        onClose={handleSwitchCategoryBottomSheet}
      >
        <h3 className="font-bold16 px-4">여행 정보 수정</h3>

        <div className="flex flex-col text-left w-full px-4 my-3">
          <BottomSheet.Label htmlFor="title">여행 종류</BottomSheet.Label>
          <div className="flex">
            <BottomSheet.Button
              styles={'rounded-l rounded-r-none ' + foreignButtonStyle}
              colorTheme={travelInfo.travelType === 'foreign' ? 'primary' : 'primaryReverse'}
              onClick={() => handleSwitchTravelType('foreign')}
            >
              해외
            </BottomSheet.Button>
            <BottomSheet.Button
              styles={'rounded-r rounded-l-none ' + domesticButtonStyle}
              colorTheme={travelInfo.travelType === 'domestic' ? 'secondary' : 'secondaryReverse'}
              onClick={() => handleSwitchTravelType('domestic')}
            >
              국내
            </BottomSheet.Button>
          </div>
        </div>

        <div className="flex flex-col text-left w-full px-4 my-3">
          <BottomSheet.Label htmlFor="title">여행 제목</BottomSheet.Label>
          <BottomSheet.Input colorTheme="black" type="text" id="title" />
        </div>

        <div className="flex flex-col text-left w-full px-4 my-3">
          <BottomSheet.Label htmlFor="departureAt">출발 일자</BottomSheet.Label>
          <BottomSheet.Input colorTheme="black" type="date" id="departureAt" />
        </div>

        <div className="flex flex-col text-left w-full px-4 my-3">
          <BottomSheet.Label htmlFor="travelPeriod">여행 기간</BottomSheet.Label>
          <BottomSheet.Counter
            id="travelPeriod"
            measure="일"
            value={travelInfo.travelPeriod}
            colorTheme="white"
            increaseFunc={handleIncraesePeriod}
            decreaseFunc={handleDecraesePeriod}
          />
        </div>

        <div className="flex flex-col text-left w-full px-4 my-3">
          <BottomSheet.Label htmlFor="destination">여행지</BottomSheet.Label>
          <BottomSheet.Input
            colorTheme="black"
            type="text"
            id="destination"
            value={travelInfo.destination}
            onChange={handleChangeCategoryName}
          />
        </div>

        <div className="flex w-full gap-4 px-4 my-3">
          <BottomSheet.Button colorTheme="invalidReverse" onClick={handleSwitchCategoryBottomSheet}>
            취소
          </BottomSheet.Button>
          <BottomSheet.Button type="button" colorTheme="primary" onClick={handleUpdataTravelInfo}>
            수정
          </BottomSheet.Button>
        </div>
      </BottomSheet>
    )
  );
}
