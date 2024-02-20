import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/sign-up";
import SignUpCompletePage from "../pages/sign-up-complete";
import FindPasswordPage from "../pages/find-password";
import ChangePasswordPage from "../pages/change-password";
import MainPage from "../pages/main";
import SignInPage from "../pages/sign-in";
import RedirectPage from "../pages/redirect";
import WelcomePage from "../pages/welcome";
import CreateListPage from "../pages/create-list";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/redirect" element={<RedirectPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signupcomplete" element={<SignUpCompletePage />} />
        <Route path="/findpassword" element={<FindPasswordPage />} />
        <Route path="/changepassword" element={<ChangePasswordPage />} />
        <Route path="/createlist" element={<CreateListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
