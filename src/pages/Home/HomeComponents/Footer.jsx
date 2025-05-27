import { ArrowRightIcon, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#FFF6D5] px-4 sm:px-6 lg:px-8 py-10 space-y-10 mt-16 text-[#0A142F]">
      {/* Logo Center */}
      <div className="flex justify-center">
        <img src="/officeLogo.png" alt="Logo" className="h-10" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Contact Info */}
        <div className="space-y-4 text-center md:text-left md:w-1/3">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Phone className="w-5 h-5 text-[#2A4E62]" />
            <h3 className="font-semibold text-[18px]">+8801644387462</h3>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Mail className="w-5 h-5 text-[#2A4E62]" />
            <p className="text-[16px] break-all">
              thingkersintilighence@gmail.com
            </p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:w-1/3 text-[16px] text-center md:text-left">
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

        {/* Email Input */}
        <form className="flex w-full sm:w-auto max-w-md mx-auto md:mx-0 md:w-1/3 border border-[#00007C33] rounded overflow-hidden">
          <input
            type="email"
            placeholder="Your Email here...."
            className="bg-white text-[#0A142F] px-4 py-2 w-full outline-none"
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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Thingkersintelligence. All rights
          reserved.
        </p>
        <div className="flex gap-3 justify-center">
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
