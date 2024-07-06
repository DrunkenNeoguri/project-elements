import { lazy } from "react";

const ListSection = lazy(() => import("./_components/list-section"));

export default function Main() {
  return <ListSection />;
}
