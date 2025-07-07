import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetCode from "../pages/auth/ResetCode";
import ResetPassword from "../pages/auth/ResetPassword";
import Products from "../pages/Products";
import NavBar from "../components/NavBar/NavBar";
import Container from "../components/Container/Container";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Categories from "../pages/Categories";
import ProductsByCategory from "../pages/ProductsByCategory";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/productsbycategory/:id" element={<ProductsByCategory />} />

        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
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
