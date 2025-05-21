import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/officeLogo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#001f30]/50 backdrop-blur-md" : "bg-[#001f30]"
      }`}
    >
      <div className="flex items-center justify-between p-4 container mx-auto">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-10 md:h-12" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex text-white items-center space-x-6">
          <Link to="programs" className="hover:text-[#05EB00]">
            Programmes
          </Link>
          <Link to="about" className="hover:text-[#05EB00]">
            About Us
          </Link>
          <Link to="contact" className="hover:text-[#05EB00]">
            Contact Us
          </Link>
          <Link to="community">
            <button className="border border-[#05EB00] text-[#05EB00] px-5 py-2 rounded-md hover:bg-[#05EB00] hover:text-[#001f30] transition">
              Join Our Community
            </button>
          </Link>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#001f30] text-white px-6 pb-4 space-y-4">
          <Link to="programs" onClick={toggleMenu} className="block">
            Programmes
          </Link>
          <Link to="about" onClick={toggleMenu} className="block">
            About Us
          </Link>
          <Link to="contact" onClick={toggleMenu} className="block">
            Contact Us
          </Link>
          <Link to="community" onClick={toggleMenu}>
            <button className="w-full border border-[#05EB00] text-[#05EB00] px-5 py-2 rounded-md hover:bg-[#05EB00] hover:text-[#001f30] transition">
              Join Our Community
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
