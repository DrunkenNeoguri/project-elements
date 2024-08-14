"use client";
import { useContext } from "react";
import { ThreeDotsIcon } from "../../assets/icons/icons";
import { ExternalContext } from "../../providers/external-provider";
import { CategoryBasicType } from "../../types/element.types";
import { PartContext } from "../../providers/part-provider";

type CategoryPropType = {
  data: CategoryBasicType;
  state?: "edit" | "check";
  handleSwitchRoll?: () => void;
};

export default function Category(props: CategoryPropType) {
  const { data, state = "check", handleSwitchRoll } = props;
  const { categoryColorTheme, categoryName } = props.data;

  const { handleExternalList } = useContext(ExternalContext);
  const { handleSetPart } = useContext(PartContext);

  const handleSwitchSelectCategoryBottomSheet = () => {
    handleSetPart(data);
    handleExternalList("element-option-category");
  };

  const categoryStyle = {
    mainColor: "bg-paletteColor" + categoryColorTheme,
    subColor: "bg-paletteSubColor" + categoryColorTheme,
    state: state === "edit" ? "" : "mr-3",
  };

  switch (state) {
    case "edit":
      return (
        <div
          className={
            "flex justify-start items-center w-full h-11 pl-3 py-[10px] rounded " +
            categoryStyle.mainColor
          }
        >
          <span className="font-bold18 text-white ">{categoryName}</span>

          <div className={"flex ml-auto " + categoryStyle.state}>
            <div
              className={
                "ml-auto mr-3 skew-x-[-16deg] w-2 h-11 " +
                categoryStyle.subColor
              }
            />
            <div
              className={
                "ml-auto mr-3 skew-x-[-16deg] w-2 h-11 " +
                categoryStyle.subColor
              }
            />
          </div>

          <button
            title="카테고리 상세 메뉴 열기"
            type="button"
            className="w-7 h-7 rounded mr-2 bg-transparent flex justify-center items-center"
            onClick={handleSwitchSelectCategoryBottomSheet}
          >
            <ThreeDotsIcon />
          </button>
        </div>
      );
    case "check":
      return (
        <button
          type="button"
          className={
            "flex justify-start items-center w-full h-11 pl-3 py-[10px] rounded " +
            categoryStyle.mainColor
          }
          onClick={handleSwitchRoll}
        >
          <span className="font-bold18 text-white ">{categoryName}</span>

          <div className={"flex ml-auto " + categoryStyle.state}>
            <div
              className={
                "ml-auto mr-3 skew-x-[-16deg] w-2 h-11 " +
                categoryStyle.subColor
              }
            />
            <div
              className={
                "ml-auto mr-3 skew-x-[-16deg] w-2 h-11 " +
                categoryStyle.subColor
              }
            />
          </div>
        </button>
      );
  }
}
