import { CategoryBasicType } from "../../../../types/element.types";
import Category from "../../../../components/category/category";
import Element from "../../../../components/element/element";
import { Dispatch, MouseEvent, SetStateAction } from "react";

type PropType = {
  elements: CategoryBasicType[];
  setElements: Dispatch<SetStateAction<CategoryBasicType[] | undefined>>;
};

export default function ElementsSection(props: PropType) {
  const { elements, setElements } = props;

  const handleCheckElement = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    setElements((prevElements) =>
      (prevElements as CategoryBasicType[]).map((category) => {
        if (
          category.categoryElements.map((element) => element.elementId === id)
        ) {
          return {
            ...category,
            categoryElements: category.categoryElements.map((element) => {
              if (element.elementId === id) {
                return { ...element, isChecked: !element.isChecked };
              }
              return element;
            }),
          };
        }
        return category;
      })
    );
  };

  if (!elements) {
    return <></>;
  }

  return (
    <section className="flex flex-col w-full p-4">
      {elements?.map((category: CategoryBasicType) => {
        return (
          <div
            key={category.categoryId}
            id={"category" + category.categoryOrder}
            className="flex flex-col gap-3 mb-6"
          >
            <Category data={category} state="checking" />

            {category.categoryElements.map((element) => {
              return (
                <Element
                  key={element.elementId}
                  state="check"
                  {...element}
                  handleCheckElement={handleCheckElement}
                />
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
