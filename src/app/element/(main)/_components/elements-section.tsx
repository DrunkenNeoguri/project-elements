import { CategoryBasicType } from '../../../../types/element.types';
import { Dispatch, SetStateAction } from 'react';
import CategoryAccordion from './category-accordion';

type PropType = {
  elements: CategoryBasicType[];
  setElements: Dispatch<SetStateAction<CategoryBasicType[] | undefined>>;
};

export default function ElementsSection(props: PropType) {
  const { elements, setElements } = props;

  if (!elements) {
    return <></>;
  }

  return (
    <section className="flex flex-col w-full p-4">
      {elements?.map((category: CategoryBasicType) => {
        return (
          <div
            key={category.categoryId}
            id={'category' + category.categoryOrder}
            className="flex flex-col gap-3 mb-6"
          >
            <CategoryAccordion category={category} setElements={setElements} />
          </div>
        );
      })}
    </section>
  );
}
