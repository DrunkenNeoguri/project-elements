import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
