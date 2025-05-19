import { ArrowRightIcon, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#FFF6D5] text-white px-10 py-10 space-y-6 mt-16">
      {/* Logo Center */}
      <div className="flex justify-center">
        <img src="/officeLogo.png" alt="Logo" className="h-10" />
      </div>

      {/* Nav and Input */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-[#2A4E62]" />
            <h3 className="text-[#2A4E62] font-[500] leading-8 text-[20px]">
              +8801644387462
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-[#2A4E62]" />
            <p className="text-[#2A4E62] font-[400] leading-8 text-[16px]">
              thingkersintilighence@gmail.com
            </p>
          </div>
        </div>
        {/* Navigation Items */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-[16px]">
          <Link href="#" className="text-[#0B293A]">
            Programmes
          </Link>
          <Link href="#" className="text-[#0B293A]">
            About Us
          </Link>
          <Link href="#" className="text-[#0B293A]">
            Contact Us
          </Link>
        </nav>

        {/* Input and Button */}
        <div className="flex items-center border border-[#00007C33] rounded overflow-hidden">
          <input
            type="email"
            placeholder="Your Email here...."
            className="bg-[#FFFFFF] text-[#0A142F] px-4 py-2 outline-none w-64"
          />
          <button className="bg-[#0099EC] px-4 py-2">
            <ArrowRightIcon className="text-white" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700" />

      {/* Bottom Line */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#0A142F]">
        <p>
          &copy; {new Date().getFullYear()} Thingkersintelligence. All rights
          reserved
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            href="#"
            className="text-[#0A142F] border border-gray-400 p-2 rounded-full"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="#"
            className="text-[#0A142F]  p-2 rounded-full border border-gray-400"
          >
            <FaTwitter />
          </Link>
          <Link
            href="#"
            className="text-[#0A142F]  p-2 rounded-full border border-gray-400"
          >
            <FaInstagram />
          </Link>
          <Link
            href="#"
            className="text-[#0A142F]  p-2 rounded-full border border-gray-400"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
}
