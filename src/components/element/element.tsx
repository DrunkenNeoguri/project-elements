"use client";
import { ChangeEvent, useContext, useState } from "react";
import {
  CreateElementIcon,
  ModifyElementIcon,
  SelectedIcon,
  ThreeDotsIcon,
} from "../../assets/icons/icons";
import { ElementBasicType } from "../../types/element.types";
import Input from "../input/input";
import { ExternalContext } from "../../providers/external-provider";

type ElementPropsType = ElementBasicType & {
  state: "create" | "modify" | "upserting" | "checking";
};

// ?CONCERN: 언젠가 분리 작업을 할 필요성이 있음
// ?CONCERN: 근데 합성 컴포넌트로 쓰기엔 좀...
// ?CONCERN: 우선은 그냥 저번처럼 만능 형태로 만들되, 케이스에 따라 쓸 수 있도록 Map 인스턴스 혹은 Map 형태로 묶어서 관리

export default function Element(props: ElementPropsType) {
  const {
    state = "checking",
    elementName,
    elementId,
    elementColorTheme,
    isChecked,
  } = props;

  const [value, setValue] = useState(elementName);
  const { handleExternalList } = useContext(ExternalContext);

  const handleSwitchElementBottomSheet = () => {
    handleExternalList("element-create-selectElement");
  };

  // *MEMO: 준비물 체크 페이지에서
  if (state === "checking") {
    const elementStyle = isChecked
      ? "bg-paletteSubColor" + elementColorTheme
      : "bg-gray";

    return (
      <button
        id={elementId}
        className={
          "flex items-center rounded w-full gap-2 p-2 m-0 outline-none border-none " +
          elementStyle
        }
      >
        <div>
          <SelectedIcon />
        </div>

        <span className="mt-[2px]">{elementName}</span>
      </button>
    );
  }

  // *MEMO: 준비물 편집 페이지에서 - 생성 / 수정 말고 일반
  if (state === "upserting") {
    return (
      <div
        id={elementId}
        className={
          "flex items-center rounded w-full gap-2 p-2 m-0 outline-none border-none bg-gray"
        }
      >
        <span className="mt-[2px] ml-1">{elementName}</span>

        <button
          title="준비물 상세 메뉴"
          type="button"
          className="flex justify-center items-center w-7 h-7 rounded bg-transparent text-black ml-auto"
          onClick={handleSwitchElementBottomSheet}
        >
          <ThreeDotsIcon />
        </button>
      </div>
    );
  }

  // *MEMO: 준비물 편집 페이지에서 - 생성 / 수정일 때,
  // ?CONCERN: tailwind에서 뒤이어 중첩으로 style class 받아올 때 얘를 우선시 하는 방법 알아보기
  // ?CONCERN: 근데... 뒤에 동적으로 받아오는 건데 JIT 방식 아니어도 되는 방법을 알아야함..
  if (state === "create" || state === "modify") {
    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      return setValue(e.currentTarget.value);
    };

    return (
      <div className="flex bg-gray rounded-lg w-full gap-2 p-2 m-0">
        <Input
          id={elementId}
          style={{ marginTop: 0 }}
          styles="h-7 p-0 px-2 py-1 border-none"
          value={value}
          onChange={handleChangeValue}
        />

        <button className="flex justify-center items-center w-7 h-7 rounded bg-primary text-white">
          {state === "create" ? <CreateElementIcon /> : <ModifyElementIcon />}
        </button>
      </div>
    );
  }
}
