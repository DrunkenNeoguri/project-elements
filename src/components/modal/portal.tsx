import { createPortal } from "react-dom";
import { PortalType } from "../types/portal";

export default function Portal(props: PortalType) {
  const { children, container } = props;

  return <>{createPortal(children, container)}</>;
}
