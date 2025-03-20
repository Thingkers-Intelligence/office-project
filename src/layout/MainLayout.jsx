import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FutureTech from "../components/FutureTech";
const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <FutureTech />
      <Outlet />
    </div>
  );
};

export default MainLayout;
