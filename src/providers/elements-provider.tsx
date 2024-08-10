"use client";
import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { CategoryBasicType, ElementBasicType } from "../types/element.types";

type ElementsReducerActionType = {
  type: string;
  target: ElementBasicType | CategoryBasicType | CategoryBasicType[];
};

type ElementsContextType = {
  elements: CategoryBasicType[];
  dispatch: Dispatch<ElementsReducerActionType>;
};

export const ElementsContext = createContext<ElementsContextType>({
  elements: [],
  dispatch: () => {},
});

const elementsReducer = (
  elements: CategoryBasicType[],
  action: ElementsReducerActionType
) => {
  switch (action.type) {
    case "createElement":
      return elements.map((category) => {
        const currentElement = action.target as ElementBasicType;
        const categoryId = (action.target as ElementBasicType).elementId.split(
          "-"
        )[0];
        if (category.categoryId === categoryId) {
          if (
            category.categoryElements.findIndex(
              (element) => element.elementId === categoryId
            ) === -1
          ) {
            category.categoryElements.push(currentElement);
          }
        }
        return category;
      });

    case "modifyElement":
      return elements.map((category) => {
        const currentElement = action.target as ElementBasicType;
        const categoryId = currentElement.elementId.split("-")[0];
        if (category.categoryId === categoryId) {
          category.categoryElements.map((element) => {
            if (element.elementId === currentElement.elementId) {
              element = currentElement;
            }
          });
        }
        return category;
      });

    case "deleteElement":
      return elements.map((category) => {
        const currentElement = action.target as ElementBasicType;
        const categoryId = currentElement.elementId.split("-")[0];
        if (category.categoryId === categoryId) {
          category.categoryElements.filter(
            (element) => element.elementId !== currentElement.elementId
          );
        }
        return category;
      });

    case "createCategory":
      if (
        elements.findIndex(
          (category) =>
            category.categoryId ===
            (action.target as CategoryBasicType).categoryId
        ) === -1
      ) {
        elements.push(action.target as CategoryBasicType);
        return elements;
      }
      return elements;

    case "updateCategory":
      return elements.map((category) => {
        const currentCategory = action.target as CategoryBasicType;
        if (category.categoryId === currentCategory.categoryId) {
          category = currentCategory;
        }
        return category;
      });

    case "deleteCategory":
      return elements.filter(
        (category) =>
          category.categoryId ===
          (action.target as CategoryBasicType).categoryId
      );

    case "setData":
      return (elements = action.target as CategoryBasicType[]);

    case "clearData":
      return [] as CategoryBasicType[];

    default:
      return elements;
  }
};

export default function ElementProvider({ children }: { children: ReactNode }) {
  const initialElements = (
    elements: CategoryBasicType[]
  ): CategoryBasicType[] => {
    return elements;
  };

  const [elements, dispatch] = useReducer<
    (
      state: CategoryBasicType[],
      action: ElementsReducerActionType
    ) => CategoryBasicType[],
    CategoryBasicType[]
  >(elementsReducer, [], initialElements);

  return (
    <ElementsContext.Provider value={{ elements, dispatch }}>
      {children}
    </ElementsContext.Provider>
  );
}
