export type listTemplate = {
  listName: string;
};

export type elementTemplate = {
  itemName: string;
  itemCheckType: boolean | number;
  itemCount?: number;
  itemGetState?: boolean;
};
