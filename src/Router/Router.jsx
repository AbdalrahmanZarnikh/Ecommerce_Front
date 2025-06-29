import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetCode from "../pages/auth/ResetCode";
import ResetPassword from "../pages/auth/ResetPassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="resetCode" element={<ResetCode />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
