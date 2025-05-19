import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 space-y-6">
      {/* Logo Center */}
      <div className="flex justify-center">
        <img src="/logo.svg" alt="Logo" className="h-10" />
      </div>

      {/* Nav and Input */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Navigation Items */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>

        {/* Input and Button */}
        <div className="flex items-center border border-gray-700 rounded overflow-hidden">
          <input
            type="email"
            placeholder="Your email"
            className="bg-gray-800 text-white px-4 py-2 outline-none w-64"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2">
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700" />

      {/* Bottom Line */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
