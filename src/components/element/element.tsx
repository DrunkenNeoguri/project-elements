"use client";
import { ChangeEvent, useContext, useState } from "react";
import { SelectedIcon, ThreeDotsIcon } from "../../assets/icons/icons";
import { ElementBasicType } from "../../types/element.types";
import Input from "../input/input";
import { ExternalContext } from "../../providers/external-provider";

type ElementPropsType = ElementBasicType & {
  state: "create" | "modify" | "upserting" | "checking";
};

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

  const elementStyle = isChecked
    ? "bg-paletteSubColor" + elementColorTheme
    : "bg-gray";

  const elementNameStyle = state === "upserting" && "ml-1";

  if (state === "upserting" || state === "checking") {
    return (
      <div
        id={elementId}
        className={
          "flex items-center rounded w-full gap-2 p-2 m-0 outline-none border-none " +
          elementStyle
        }
      >
        {state === "checking" && (
          <div>
            <SelectedIcon />
          </div>
        )}
        <span className={"mt-[2px] " + elementNameStyle}>{elementName}</span>

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

  if (state === "create" || state === "modify") {
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
}
