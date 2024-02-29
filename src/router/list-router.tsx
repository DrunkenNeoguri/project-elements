import { Route, Routes } from "react-router-dom";
import ListsCreate from "../pages/lists-create";

export default function ListRouter() {
  return (
    <Routes>
      <Route path="/create" element={<ListsCreate />} />
    </Routes>
  );
}
