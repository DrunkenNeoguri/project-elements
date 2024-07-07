import { ReactNode } from "react";
import { createPortal } from "react-dom";

export type PortalPropType = {
  children: ReactNode;
  container: Element | DocumentFragment;
  key?: null | string;
};

export default function Portal(props: PortalPropType) {
  const { children, container } = props;

  return <>{createPortal(children, container)}</>;
}
