import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SideBarDashboard from "../../components/SideBarDashboard/SideBarDashboard";

const Dashboard = () => {

  return (
      <div className="flex justify-start h-[87.2vh] md:h-[87.4vh] overflow-hidden ">
       <SideBarDashboard/>
      <div className=" w-full h-[100%] flex-9/12 p-5">
        <Outlet />
      </div>
       </div>
  );
};

export default Dashboard;
