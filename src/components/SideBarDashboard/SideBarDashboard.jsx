import React, { useState } from "react";
import { BsFillCartFill, BsFillInfoSquareFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SideBarDashboard = () => {
  const links = [
    {
      path: "info",
      label: "المعلومات الشخصية",
      icon: (
        <BsFillInfoSquareFill
          size={25}
          className="hover:text-blue-400 md:hover:text-white cursor-pointer "
        />
      ),
    },
        {
      path: "addresses",
      label: "العناوين",
      icon: (
        <FaAddressBook
          size={25}
          className="hover:text-blue-400 md:hover:text-white cursor-pointer"
        />
      ),
    },
    {
      path: "orders",
      label: "الطلبات",
      icon: (
        <BsFillCartFill
          size={25}
          className="hover:text-blue-400 md:hover:text-white  cursor-pointer "
        />
      ),
    },
  ];
  const [clicked, setClicked] = useState("");
  const location=useLocation()
  const navigate=useNavigate()

  console.log(location.pathname)
  return (
    <>
      <div className="md:hidden space-y-7 py-4 px-2">
        {links.map((ele) => {
          return <div onClick={()=>{navigate(`/dashboard/${ele.path}`)}}>{ele.icon}</div>;
        })}
      </div>
      <div className="hidden md:block w-full h-[100%] flex-1/12 border-l-3 border-gray-600">
        <h1 className="text-center  font-bold text-3xl bg-blue-700 text-white p-5 ">لوحة التحكم </h1>
        <div className="hidden md:flex flex-col justify-start items-start p-4 gap-10 mt-10">
          {links.map((ele) => {
            return (
              <Link
                className={`hover:bg-blue-700 hover:rounded-lg hover:p-4 hover:text-white cursor-pointer transition-all duration-300 flex justify-center items-center gap-4  ${
                  location.pathname === `/dashboard/${ele.path}` &&
                  "bg-blue-700 rounded-lg p-4 transition-all duration-300 text-white"
                }`}
                onClick={() => {
                  setClicked(ele.label);
                }}
                to={ele.path}
              >
                <span>{ele.icon}</span> {ele.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBarDashboard;
