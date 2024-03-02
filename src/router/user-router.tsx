import { Route, Routes } from "react-router-dom";
import UsersSignIn from "../pages/users-signin";
import UsersSignUp from "../pages/users-signup";
import UsersVerified from "../pages/users-verified";
import UsersFind from "../pages/users-find";
import UsersChange from "../pages/users-change";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="/signin" element={<UsersSignIn />} />
      <Route path="/signup" element={<UsersSignUp />} />
      <Route path="/verified" element={<UsersVerified />} />
      <Route path="/find" element={<UsersFind />} />
      <Route path="/change" element={<UsersChange />} />
    </Routes>
  );
}
