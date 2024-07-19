import Category from "../../../../components/category/category";
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
      {categoryList?.map((category: CategoryBasicType, idx: number) => {
        return (
          <div id={`category${idx + 1}`} className="flex flex-col gap-3 mb-6">
            <Category
              name={category.categoryName}
              color={category.categoryColor}
              state="custom"
            />
            {category.elements.map((element) => (
              <div>{element.elementName}</div>
            ))}
          </div>
        );
      })}
    </section>
  );
}
