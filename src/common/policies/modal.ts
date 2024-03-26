export const hasSecondaryObjectInModal = (secondary?: {
  text: string;
  func: () => void;
}) => {
  return secondary !== undefined ? true : false;
};
