import { Route, Routes } from "react-router-dom";
import ListCreate from "../pages/list-create";

export default function ListRouter() {
  return (
    <Routes>
      <Route path="/create" element={<ListCreate />} />
    </Routes>
  );
}
