import { ChangeEvent, useState } from "react";
import { SelectedIcon, ThreeDotsIcon } from "../../assets/icons/icons";
import { ElementBasicType } from "../../types/element.types";
import Input from "../input/input";

type ElementPropsType = ElementBasicType & {
  state: "create" | "modify" | "basic";
};

export default function Element(props: ElementPropsType) {
  const {
    state = "basic",
    elementName,
    elementId,
    elementColorTheme,
    isChecked,
  } = props;

  const [value, setValue] = useState(elementName);

  const elementStyle = isChecked
    ? "bg-paletteSubColor" + elementColorTheme
    : "bg-gray";

  if (state === "basic") {
    return (
      <button
        id={elementId}
        type="button"
        className={
          "flex items-center rounded-lg w-full gap-2 p-2 m-0 outline-none border-none " +
          elementStyle
        }
      >
        <div>
          <SelectedIcon />
        </div>
        <span className="mt-[2px]">{elementName}</span>

        <button
          title="준비물 상세 메뉴"
          type="button"
          className="flex justify-center items-center w-7 h-7 rounded bg-transparent text-black ml-auto"
        >
          <ThreeDotsIcon />
        </button>
      </button>
    );
  }

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    return setValue(e.currentTarget.value);
  };

  return (
    <div className="flex bg-gray rounded-lg w-full gap-2 p-2 m-0">
      <Input
        id={elementId}
        styles="h-7 p-4"
        value={value}
        onChange={handleChangeValue}
      />

      <button className="flex justify-center items-center w-7 h-7 rounded bg-primary text-white">
        {state === "create" ? <ThreeDotsIcon /> : <ThreeDotsIcon />}
      </button>
    </div>
  );
}
