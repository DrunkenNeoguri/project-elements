'use client';
import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer } from 'react';
import { CategoryBasicType, ElementBasicType, ElementsBasicType } from '../types/element.types';
import { AuthContext } from './auth-provider';
import { TravelBasicType } from '../types/travel.types';
import ElementService from '../services/element-service';

export type ElementsReducerActionType = {
  type: string;
  target: ElementsBasicType | CategoryBasicType | ElementBasicType | TravelBasicType;
};

export type ElementsContextType = {
  state: ElementsBasicType;
  dispatch: Dispatch<ElementsReducerActionType>;
};

export const ElementsContext = createContext<ElementsContextType>({
  state: {
    info: {
      id: '',
      travelType: 'domestic',
      title: '',
      departureAt: '',
      travelPeriod: 0,
      destination: '',
    },
    elements: [],
  },
  dispatch: () => {},
});

const elementsReducer = (
  state: ElementsBasicType,
  action: ElementsReducerActionType,
): ElementsBasicType => {
  switch (action.type) {
    case 'createElement':
      return {
        ...state,
        elements: state.elements.map(category => {
          const currentElement = action.target as ElementBasicType;
          const categoryId = currentElement.elementId.split('-')[0];
          if (category.categoryId === categoryId) {
            if (
              category.categoryElements.findIndex(element => element.elementId === categoryId) ===
              -1
            ) {
              return {
                ...category,
                categoryElements: [...category.categoryElements, currentElement],
              };
            }
          }
          return category;
        }),
      };

    case 'updateElement':
      return {
        ...state,
        elements: state.elements.map(category => {
          const currentElement = action.target as ElementBasicType;
          const categoryId = currentElement.elementId.split('-')[0];

          if (category.categoryId === categoryId) {
            return {
              ...category,
              categoryElements: category.categoryElements.map(element => {
                if (element.elementId === currentElement.elementId) {
                  return { ...element, ...currentElement };
                }
                return element;
              }),
            };
          }

          return category;
        }),
      };

    case 'deleteElement':
      return {
        ...state,
        elements: state.elements.map(category => {
          const currentElement = action.target as ElementBasicType;
          const categoryId = currentElement.elementId.split('-')[0];
          if (category.categoryId === categoryId) {
            return {
              ...category,
              categoryElements: category.categoryElements.filter(
                element => element.elementId !== currentElement.elementId,
              ),
            };
          }
          return category;
        }),
      };

    case 'createCategory':
      if (
        state.elements.findIndex(
          category => category.categoryId === (action.target as CategoryBasicType).categoryId,
        ) === -1
      ) {
        return {
          ...state,
          elements: [...state.elements, action.target as CategoryBasicType],
        };
      }
      return state;

    case 'updateCategory':
      return {
        ...state,
        elements: state.elements.map(category => {
          const currentCategory = action.target as CategoryBasicType;
          if (category.categoryId === currentCategory.categoryId) {
            return currentCategory;
          }
          return category;
        }),
      };

    case 'deleteCategory':
      return {
        ...state,
        elements: state.elements.filter(
          category => category.categoryId !== (action.target as CategoryBasicType).categoryId,
        ),
      };

    case 'updateTravelInfo':
      return {
        ...state,
        info: action.target as TravelBasicType,
      };

    case 'setData':
      return action.target as ElementsBasicType;

    case 'clearData':
      return {
        info: {
          id: '',
          travelType: 'domestic',
          title: '',
          departureAt: '',
          travelPeriod: 0,
          destination: '',
        },
        elements: [],
      };

    default:
      return state;
  }
};

export default function ElementProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(elementsReducer, {
    info: {
      id: '',
      travelType: 'domestic',
      title: '',
      departureAt: '',
      travelPeriod: 0,
      destination: '',
    },
    elements: [],
  });

  const user = useContext(AuthContext);

  useEffect(() => {
    if (!user || state === null) {
      return;
    }

    const saveDraftToDatabase = () => {
      return setTimeout(async () => {
        await ElementService.postElementsData(user.uid, state.info.id, state);
      }, 10000);
    };
    saveDraftToDatabase();

    return () => clearTimeout(saveDraftToDatabase());
  }, [state, user]);

  return (
    <ElementsContext.Provider value={{ state, dispatch }}>{children}</ElementsContext.Provider>
  );
}
