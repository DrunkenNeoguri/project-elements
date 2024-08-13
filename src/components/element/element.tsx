"use client";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  MouseEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import {
  CreateCategoryIcon,
  CreateElementIcon,
  ModifyElementIcon,
  SelectedIcon,
  ThreeDotsIcon,
  UnselectedIcon,
} from "../../assets/icons/icons";
import { ElementBasicType } from "../../types/element.types";
import Input from "../input/input";
import { ExternalContext } from "../../providers/external-provider";
import { ElementsContext } from "../../providers/elements-provider";
import { PartContext } from "../../providers/part-provider";

export type ElementStateType = "base" | "check" | "create" | "modify" | "new";

type ElementPropsType = ElementBasicType & {
  state: ElementStateType;
  handleCheckElement?: (e: MouseEvent<HTMLButtonElement>) => void;
};

// ?CONCERN: 케이스에 따라 쓸 수 있도록 Map 인스턴스 혹은 Map 형태로 묶어서 시도...
// ?CONCERN: 아래와 같이 일단은 Switch로 관리해보기로.
export default function Element(props: ElementPropsType) {
  const { state, handleCheckElement } = props;
  const [compState, setCompState] = useState(state);

  switch (compState) {
    case "check":
      return (
        <CheckElement {...props} handleCheckElement={handleCheckElement} />
      );
    case "modify":
    case "create":
      return (
        <EditElement {...props} state={compState} setCompState={setCompState} />
      );
    case "base":
      return <BaseElement {...props} setCompState={setCompState} />;
    case "new":
      return <NewElement setCompState={setCompState} />;
    default:
      return;
  }
}

// *MEMO: 준비물 체크 페이지용
function CheckElement(
  props: ElementPropsType & {
    handleCheckElement?: (e: MouseEvent<HTMLButtonElement>) => void;
  }
) {
  const {
    elementId,
    elementName,
    elementColorTheme,
    isChecked,
    handleCheckElement,
  } = props;
  const elementStyle = isChecked
    ? "bg-paletteSubColor" + elementColorTheme
    : "bg-gray";

  return (
    <button
      id={elementId}
      type="button"
      className={
        "flex items-center rounded w-full gap-2 p-2 m-0 outline-none border-none " +
        elementStyle
      }
      onClick={handleCheckElement}
    >
      <div>{isChecked ? <SelectedIcon /> : <UnselectedIcon />}</div>

      <span className="mt-[2px]">{elementName}</span>
    </button>
  );
}

// *MEMO: 준비물 편집 페이지에서 - 생성 / 수정 말고 일반
function BaseElement(
  props: ElementPropsType & {
    setCompState: Dispatch<SetStateAction<ElementStateType>>;
  }
) {
  const { elementName } = props;
  const { handleSetPart } = useContext(PartContext);
  const { handleExternalList } = useContext(ExternalContext);

  const handleSwitchElementBottomSheet = () => {
    const { setCompState, ...rest } = props;
    handleSetPart({ ...rest, setState: setCompState });
    handleExternalList("element-option-element");
  };
  return (
    <div
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
function EditElement(
  props: ElementPropsType & {
    setCompState: Dispatch<SetStateAction<ElementStateType>>;
  }
) {
  const { state, setCompState, elementName, ...rest } = props;

  const [value, setValue] = useState(elementName);
  const { dispatch } = useContext(ElementsContext);
  const { handleSetPart } = useContext(PartContext);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    return setValue(e.currentTarget.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    switch (state) {
      case "create": {
        dispatch({
          type: "createElement",
          target: {
            elementName: value,
            ...rest,
          },
        });
        setValue("");
        setCompState("new");
        return handleSetPart(null);
      }

      case "modify": {
        dispatch({
          type: "updateElement",
          target: {
            elementName: value,
            ...rest,
          },
        });
        setValue("");
        setCompState("base");
        return handleSetPart(null);
      }
    }
  };

  return (
    <form
      className="flex bg-gray rounded-lg w-full gap-2 p-2 m-0"
      onSubmit={onSubmit}
    >
      <Input
        style={{ marginTop: 0 }}
        styles="h-7 p-0 px-2 py-1 border-none"
        value={value}
        onChange={handleChangeValue}
      />

      <button
        type="submit"
        className="flex justify-center items-center w-7 h-7 rounded bg-primary text-white"
      >
        {state === "create" ? <CreateElementIcon /> : <ModifyElementIcon />}
      </button>
    </form>
  );
}

function NewElement({
  setCompState,
}: {
  setCompState: Dispatch<SetStateAction<ElementStateType>>;
}) {
  const handleSwitchCompState = () => {
    return setCompState("create");
  };

  return (
    <button
      type="button"
      className="flex items-center rounded w-full gap-2 px-3 py-[9px] m-0 outline-none border-none text-primary bg-transparent"
      onClick={handleSwitchCompState}
    >
      <CreateCategoryIcon />
      <span className="mt-[2px]">준비물 추가</span>
    </button>
  );
}
