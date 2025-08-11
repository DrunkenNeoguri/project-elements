export type ElementBasicType = {
  name: string;
  isChecked: boolean;
  order: number;
};

export type CategoryBasicType = {
  categoryName: string;
  categoryId: string;
  elementId: string;
  theme: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  categoryList: ElementBasicType[];
};

export type ElementsBasicType = {
  travelId: string;
  elementId: string;
  categoryId1: string;
  categoryId2: string | null;
  categoryId3: string | null;
  categoryId4: string | null;
  categoryId5: string | null;
  categoryId6: string | null;
  categoryId7: string | null;
  categoryId8: string | null;
  categoryId9: string | null;
  categoryId10: string | null;
  categoryId11: string | null;
  categoryId12: string | null;
  categoryId13: string | null;
  categoryId14: string | null;
  createdAt: string;
  updatedAt: string;
};
