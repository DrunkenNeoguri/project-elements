import { useContext } from "react";
import { AddIcon } from "../../../../assets/icons/icons";
import Category from "../../../../components/category/category";
import Element from "../../../../components/element/element";
import { CategoryBasicType } from "../../../../types/element.types";
import { ExternalContext } from "../../../../providers/external-provider";
import { PartContext } from "../../../../providers/part-provider";

type PropType = {
  elements: CategoryBasicType[];
};

export default function ElementsSection(props: PropType) {
  const { elements } = props;
  const { handleExternalList } = useContext(ExternalContext);
  const { handleSetPart } = useContext(PartContext);

  const handleSwitchCategoryBottomSheet = () => {
    handleSetPart({
      categoryName: "",
      categoryId:
        "category" +
        (Math.max(
          ...elements.map((category) =>
            parseInt(
              category.categoryId.substring(
                category.categoryId.indexOf("y") + 1,
                category.categoryId.length
              )
            )
          )
        ) +
          1),
      categoryColorTheme: "01",
      categoryOrder:
        Math.max(...elements.map((categoty) => categoty.categoryOrder)) + 1,
      categoryElements: [],
    });
    handleExternalList("element-create-category");
  };

  return (
    <section className="flex flex-col w-full p-4">
      {elements?.map((category: CategoryBasicType) => {
        return (
          <div
            key={category.categoryId}
            id={"category" + category.categoryOrder}
            className="flex flex-col gap-3 mb-6"
          >
            <Category data={category} state="upserting" />

            {category.categoryElements.map((element) => {
              return (
                <Element key={element.elementId} state="base" {...element} />
              );
            })}

            <Element
              state="new"
              elementId={`${category.categoryId}-element${
                Math.max(
                  ...category.categoryElements.map((element) =>
                    parseInt(
                      element.elementId.split("-")[1].replace("element", "")
                    )
                  )
                ) + 1
              }`}
              elementName=""
              elementColorTheme={category.categoryColorTheme}
              isChecked={false}
              elementOrder={category.categoryElements.length + 1}
            />
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
