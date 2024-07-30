"use client";
import { useContext } from "react";
import { ThreeDotsIcon } from "../../assets/icons/icons";
import { ExternalContext } from "../../providers/external-provider";

type CategoryPropType = {
  name: string;
  color: string;
  state?: "upserting" | "checking";
};

export default function Category(props: CategoryPropType) {
  const { name, color, state = "read" } = props;

  const { handleExternalList } = useContext(ExternalContext);

  const handleSwitchSelectCategoryBottomSheet = () => {
    handleExternalList("element-create-selectCategory");
  };

  const categoryStyle = {
    mainColor: "bg-paletteColor" + color,
    subColor: "bg-paletteSubColor" + color,
    state: state === "upserting" ? "" : "mr-3",
  };
  return (
    <div
      className={
        "flex justify-start items-center w-full h-11 pl-3 py-[10px] rounded " +
        categoryStyle.mainColor
      }
    >
      <span className="font-bold18 text-white ">{name}</span>

      <div className={"flex ml-auto " + categoryStyle.state}>
        <div
          className={
            "ml-auto mr-3 skew-x-[-16deg] w-2 h-11 " + categoryStyle.subColor
          }
        />
        <div
          className={
            "ml-auto mr-3 skew-x-[-16deg] w-2 h-11 " + categoryStyle.subColor
          }
        />
      </div>

      {state === "upserting" && (
        <button
          title="카테고리 상세 메뉴 열기"
          type="button"
          className="w-7 h-7 rounded mr-2 bg-transparent flex justify-center items-center"
          onClick={handleSwitchSelectCategoryBottomSheet}
        >
          <ThreeDotsIcon />
        </button>
      )}
    </div>
  );
}
