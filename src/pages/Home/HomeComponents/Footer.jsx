import { ArrowRightIcon, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#FFF6D5] px-6 py-10 space-y-8 mt-16 text-[#0A142F]">
      {/* Logo Center */}
      <div className="flex justify-center mb-6">
        <img src="/officeLogo.png" alt="Logo" className="h-10" />
      </div>

      {/* Nav and Input Container */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10">
        {/* Contact Info */}
        <div className="space-y-4 text-center md:text-left md:flex-1">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Phone className="w-5 h-5 text-[#2A4E62]" />
            <h3 className="font-semibold text-[20px]">+8801644387462</h3>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Mail className="w-5 h-5 text-[#2A4E62]" />
            <p className="text-[16px]">thingkersintilighence@gmail.com</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-[16px] md:flex-1">
          <Link to="#" className="text-[#0B293A] hover:underline">
            Programmes
          </Link>
          <Link to="#" className="text-[#0B293A] hover:underline">
            About Us
          </Link>
          <Link to="#" className="text-[#0B293A] hover:underline">
            Contact Us
          </Link>
        </nav>

        {/* Email Input and Button */}
        <form className="flex items-center border border-[#00007C33] rounded overflow-hidden md:flex-1 max-w-sm mx-auto md:mx-0">
          <input
            type="email"
            placeholder="Your Email here...."
            className="bg-white text-[#0A142F] px-4 py-2 outline-none flex-grow min-w-0"
          />
          <button
            type="submit"
            className="bg-[#0099EC] px-4 py-2 hover:bg-[#007ACD] transition-colors duration-200"
            aria-label="Subscribe"
          >
            <ArrowRightIcon className="text-white" />
          </button>
        </form>
      </div>

      {/* Divider */}
      <hr className="border-gray-400" />

      {/* Bottom Line */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 md:gap-0">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Thingkersintelligence. All rights
          reserved
        </p>
        <div className="flex gap-4">
          <Link
            to="#"
            className="text-[#0A142F] border border-gray-400 p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="#"
            className="text-[#0A142F] border border-gray-400 p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
          <Link
            to="#"
            className="text-[#0A142F] border border-gray-400 p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>
          <Link
            to="#"
            className="text-[#0A142F] border border-gray-400 p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="YouTube"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
}
