import { useContext } from "react";
import { AddIcon, AddPrimaryIcon } from "../../../../assets/icons/icons";
import Category from "../../../../components/category/category";
import Element from "../../../../components/element/element";
import {
  CategoryBasicType,
  ElementsType,
} from "../../../../types/element.types";
import { ExternalContext } from "../../../../providers/external-provider";

type ElementsSectionPropType = {
  elements: ElementsType;
};

export default function ElementsSection(props: ElementsSectionPropType) {
  const { elements } = props;
  const { handleExternalList } = useContext(ExternalContext);

  const categoryList = !elements
    ? undefined
    : Object.keys(elements).map((key) => elements[key]);

  const handleSwitchCategoryBottomSheet = () => {
    handleExternalList("element-create-category");
  };

  return (
    <section className="flex flex-col w-full p-4">
      {categoryList?.map((category: CategoryBasicType) => {
        return (
          <div
            key={category.categoryId}
            id={"category" + category.categoryOrder}
            className="flex flex-col gap-3 mb-6"
          >
            <Category
              name={category.categoryName}
              color={category.categoryColorTheme}
              state="upserting"
            />
            {category.categoryElements.map((element) => (
              <Element key={element.elementId} state="upserting" {...element} />
            ))}
            <button className="flex items-center rounded w-full gap-2 px-3 py-2 m-0 outline-none border-none text-primary bg-transparent">
              <AddPrimaryIcon />
              <span className="mt-[2px]">준비물 추가</span>
            </button>
            {/* <Element
              state="create"
              elementId={"고민..."}
              elementName=""
              elementColorTheme={category.categoryColorTheme}
              isChecked={false}
              elementOrder={category.categoryElements.length + 1}
            /> */}
          </div>
        );
      })}
      <button
        className="flex items-center w-full h-11 pl-3 py-[10px] font-bold16 rounded bg-invalid text-white gap-2"
        type="button"
        onClick={handleSwitchCategoryBottomSheet}
      >
        <AddIcon />
        <span className="mt-[2px]">카테고리 추가</span>
      </button>
    </section>
  );
}
