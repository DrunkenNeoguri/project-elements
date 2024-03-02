import { BrowserRouter, Route, Routes } from "react-router-dom";
import Redirect from "../pages/redirect";
import Welcome from "../pages/welcome";
import Main from "../pages/main";
import UserRouter from "./user-router";
import ListRouter from "./list-router";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/users/*" element={<UserRouter />} />
        <Route path="/lists/*" element={<ListRouter />} />
      </Routes>
    </BrowserRouter>
  );
}
