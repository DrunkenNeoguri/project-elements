import Category from "../../../../components/category/category";
import Element from "../../../../components/element/element";
import {
  CategoryBasicType,
  ElementsType,
} from "../../../../types/element.types";

type ElementsSectionPropType = {
  elements: ElementsType;
};

export default function ElementsSection(props: ElementsSectionPropType) {
  const { elements } = props;

  const categoryList = !elements
    ? undefined
    : Object.keys(elements).map((key) => elements[key]);

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
              state="custom"
            />
            {category.categoryElements.map((element) => (
              <Element key={element.elementId} state="basic" {...element} />
            ))}
          </div>
        );
      })}
    </section>
  );
}
