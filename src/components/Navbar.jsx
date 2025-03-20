import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/officeLogo.png";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#001f30]  ">
      <div className="flex items-center space-x-4 p-4 justify-between container mx-auto">
        <div>
          <img src={logo} alt="" />
        </div>

        <ul className="flex text-white space-x-4">
          <Link to={"about"}>About Us</Link>
          <Link to={"contact"}>Contact Us</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
