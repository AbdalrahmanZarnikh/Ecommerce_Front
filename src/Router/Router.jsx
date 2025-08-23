import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetCode from "../pages/auth/ResetCode";
import ResetPassword from "../pages/auth/ResetPassword";
import Products from "../pages/Products";
import NavBar from "../components/NavBar/NavBar";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Show from "../pages/Show";
import { getCategories } from "../redux/slice/category/categorySlice";
import { getBrands } from "../redux/slice/brand/brandSlice";
import {
  getProductsByCategory,
  getProductsByBrand,
} from "../redux/slice/product/productSlice";
import ProductsBy from "../pages/ProductsBy";
import Dashboard from "../pages/DashboardUser/Dashboard";
import Addresses from "../pages/DashboardUser/Addresses";
import Info from "../pages/DashboardUser/Info";
import OrdersUser from "../pages/DashboardUser/OrdersUser";
import Footer from "../components/Footer/Footer";
import Contact from "../pages/Contact";
import CashOrder from "../pages/order/CashOrder";
import HawalaOrder from "../pages/order/HawalaOrder";
import { useSelector } from "react-redux";
import Home from "../Home";

const Router = () => {

const {darkMode}=useSelector((state)=>state.userSlice)


  return (
    <BrowserRouter>
      <div className={`flex flex-col min-h-screen ${darkMode && "dark"} dark:bg-zinc-800`}>
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="addresses" element={<Addresses />} />
              <Route path="info" element={<Info />} />
              <Route path="orders" element={<OrdersUser />} />
            </Route>
            <Route
              path="/categories"
              element={
                <Show title={"تسوق حسب القسم"} getThunk={getCategories} />
              }
            />
            <Route
              path="/brands"
              element={<Show title={"تسوق حسب الماركة"} getThunk={getBrands} />}
            />

            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route
              path="/categories/:id"
              element={<ProductsBy getThunk={getProductsByCategory} />}
            />
            <Route
              path="/brands/:id"
              element={<ProductsBy getThunk={getProductsByBrand} />}
            />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
          <Route path="/order">
          <Route path="cash/:cartId" element={<CashOrder/>} />
          <Route path="hawala/:cartId" element={<HawalaOrder/>} />
        </Route>

            <Route path="/auth">
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="forgotPassword" element={<ForgotPassword />} />
              <Route path="resetCode" element={<ResetCode />} />
              <Route path="resetPassword" element={<ResetPassword />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
