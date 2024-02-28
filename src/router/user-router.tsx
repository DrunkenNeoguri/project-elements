import { Route, Routes } from "react-router-dom";
import UserSignIn from "../pages/user-sign-in";
import UserSignUp from "../pages/user-sign-up";
import UserFind from "../pages/user-find";
import UserChange from "../pages/user-change";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="/signin" element={<UserSignIn />} />
      <Route path="/signup" element={<UserSignUp />} />
      <Route path="/signup/complete" element={<UserSignUp />} />
      <Route path="/find" element={<UserFind />} />
      <Route path="/change" element={<UserChange />} />
    </Routes>
  );
}
