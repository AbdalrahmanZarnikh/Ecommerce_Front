import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container/Container";

const NavBar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-blue-700 font-bold text-3xl">متجري</h1>

          <div className="hidden md:flex justify-center items-center gap-4">
            <Link className="hover:text-blue-400" to="/">
              الرئيسية
            </Link>
            <Link className="hover:text-blue-400" to="/products">
              المنتجات
            </Link>
            <Link className="hover:text-blue-400" to="/categories">
              الأقسام
            </Link>
          </div>

          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="البحث عن المنتجات"
              className="p-4 w-full rounded-lg border"
            />
            <BiSearch
              className="absolute left-2 top-5 text-gray-500"
              size={21}
            />
          </div>

          <div className="flex justify-center items-center gap-4">
            <FaRegHeart
              size={25}
              className="hover:text-blue-400 cursor-pointer"
            />
            <FiShoppingCart
              size={25}
              className="hover:text-blue-400 cursor-pointer"
            />
            <button
              className="hidden md:block text-white bg-blue-600 rounded-lg p-4 cursor-pointer hover:bg-blue-400"
              onClick={() => navigate("/auth/login")}
            >
              تسجيل الدخول
            </button>
            <GiHamburgerMenu
              size={25}
              className="hover:text-blue-400 cursor-pointer md:hidden"
              onClick={() => setMenuBar(!menuBar)}
            />
          </div>
        </div>
      </div>

      <div className="h-[90px]" />

      {menuBar && (
        <div className="fixed top-[90px] left-0 w-full flex flex-col items-center justify-center p-5 gap-4 bg-gray-100 md:hidden shadow-lg z-40">
          <Link
            to="/"
            className="bg-gray-200 w-full text-center py-3 rounded-lg hover:bg-gray-300"
            onClick={() => {
              setMenuBar(false);
            }}
          >
            الرئيسية
          </Link>
          <Link
            to="/products"
            className="bg-gray-200 w-full text-center py-3 rounded-lg hover:bg-gray-300"
            onClick={() => {
              setMenuBar(false);
            }}
          >
            المنتجات
          </Link>
          <Link
            to="/categories"
            className="bg-gray-200 w-full text-center py-3 rounded-lg hover:bg-gray-300"
            onClick={() => {
              setMenuBar(false);
            }}
          >
            الأقسام
          </Link>
          <button
            className="text-white bg-blue-600 rounded-lg px-5 py-3 hover:bg-blue-400 cursor-pointer"
            onClick={() => {
              navigate("/auth/login")
              setMenuBar(false)
            }}
          >
            تسجيل الدخول
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
