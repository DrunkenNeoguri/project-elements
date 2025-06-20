import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import Category from '../../../../components/category/category';
import Element from '../../../../components/element/element';
import { CategoryBasicType } from '../../../../types/element.types';

type CategoryAccordionPropType = {
  category: CategoryBasicType;
  setElements: Dispatch<SetStateAction<CategoryBasicType[] | undefined>>;
};

export default function CategoryAccordion(props: CategoryAccordionPropType) {
  const { category, setElements } = props;
  const [roll, setRoll] = useState(false);

  const handleCheckElement = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    setElements(prevElements =>
      (prevElements as CategoryBasicType[]).map(category => {
        const targetElement = category.categoryElements.find(element => element.elementId === id);

        if (targetElement) {
          return {
            ...category,
            categoryElements: category.categoryElements.map(element =>
              element.elementId === id ? { ...element, isChecked: !element.isChecked } : element,
            ),
          };
        }

        return category;
      }),
    );
  };

  const handleSwitchRoll = () => {
    setRoll(!roll);
  };

  return (
    <>
      <Category data={category} handleSwitchRoll={handleSwitchRoll} />

      {roll ? (
        <div></div>
      ) : (
        category.categoryElements.map(element => {
          return (
            <Element
              key={element.elementId}
              state="check"
              {...element}
              handleCheckElement={handleCheckElement}
            />
          );
        })
      )}
    </>
  );
}
