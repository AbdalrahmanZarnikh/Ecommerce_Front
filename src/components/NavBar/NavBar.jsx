import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <div className="flex justify-between items-center p-5">
      <h1 className="text-blue-700 font-bold text-3xl">متجري</h1>
      <div className="hidden  md:flex justify-center items-center gap-4">
        <Link className="hover:text-blue-400">الرئيسية</Link>
        <Link className="hover:text-blue-400">المنتجات</Link>
        <Link className="hover:text-blue-400">التصنيفات</Link>
      </div>

      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="البحث عن المنتجات"
          className="p-4 w-full rounded-lg border "
        />
        <BiSearch className="absolute left-2 top-5" size={20}/>
      </div>

      <div className="flex justify-center items-center gap-4">
        <FaRegHeart size={25} className="hover:text-blue-400 cursor-pointer" />
        <FiShoppingCart
          size={25}
          className="hover:text-blue-400 cursor-pointer"
        />

        <button className="hidden md:block text-white bg-blue-600 rounded-lg p-4">
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
};

export default NavBar;
