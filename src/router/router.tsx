import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/sign-up";
import SignUpCompletePage from "../pages/sign-up-complete";
import FindPasswordPage from "../pages/find-password";
import ChangePasswordPage from "../pages/change-password";
import MainPage from "../pages/main";
import SignInPage from "../pages/sign-in";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signupcomplete" element={<SignUpCompletePage />} />
        <Route path="/findpassword" element={<FindPasswordPage />} />
        <Route path="/changepassword" element={<ChangePasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
