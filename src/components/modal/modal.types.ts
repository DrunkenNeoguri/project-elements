export type ModalType = "alert" | "info" | "confirm" | "checked";

export type ModalPropType = {
  title: string;
  context?: string;
  modalType: ModalType;
  primary: { text: string; func: () => void };
  secondary?: { text: string; func: () => void };
};

export type StModalTitleType = {
  $modalType: ModalType;
};

export type StModalPrimaryButtonType = {
  $isOneButton: boolean;
};
