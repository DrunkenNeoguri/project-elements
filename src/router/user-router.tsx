import { Route, Routes } from "react-router-dom";
import UserFind from "../pages/user-find";
import UserChange from "../pages/user-change";
import UserSignIn from "../pages/user-signin";
import UserSignUp from "../pages/user-signup";
import UserVerified from "../pages/user-verified";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="/signin" element={<UserSignIn />} />
      <Route path="/signup" element={<UserSignUp />} />
      <Route path="/verified" element={<UserVerified />} />
      <Route path="/find" element={<UserFind />} />
      <Route path="/change" element={<UserChange />} />
    </Routes>
  );
}
