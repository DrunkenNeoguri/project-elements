import { ReactNode } from "react";

export type PortalType = {
  children: ReactNode;
  container: Element | DocumentFragment;
  key?: null | string;
};
