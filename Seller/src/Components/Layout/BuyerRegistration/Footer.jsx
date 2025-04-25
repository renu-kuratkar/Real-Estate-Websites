import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Left Section - Contact Info */}
        <div>
          <h3 className="text-4xl font-bold">zaminwale.com</h3>
          <p className="mt-3 text-sm">
            G-Square Business Park, 3rd Floor, Office no 303 & 304, opposite of Sanpada Railway Station, Navi Mumbai, Maharashtra 400703
          </p>
          <p className="mt-2 text-sm font-semibold">9555599299 / 9555599099</p>
          <p className="mt-1 text-sm">info@zaminwale.com</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-4">
            <a href="#" className="p-2 bg-black rounded-full hover:bg-blue-600 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-black rounded-full hover:bg-gray-900 hover:text-white">
              <FaXTwitter />
            </a>
            <a href="#" className="p-2 bg-black rounded-full hover:bg-pink-600 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-black rounded-full hover:bg-red-600 hover:text-white">
              <FaYoutube />
            </a>
            <a href="#" className="p-2 bg-black rounded-full hover:bg-blue-500 hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Middle Section - Company Links */}
        <div>
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Testimonials</a></li>
            <li><a href="#" className="hover:text-blue-600">Awards & Media</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          </ul>
        </div>

        {/* Right Section - About & Projects */}
        <div>
          <h3 className="text-lg font-bold">About Zaminwale</h3>
          <p className="mt-3 text-sm">
            At ZaminWale, we take pride in being your trusted partner in real estate, specializing in land transactions in Thane, Panvel, Mahamumbai, and Navi Mumbai.
          </p>

          <h3 className="text-lg font-bold mt-4">Projects in Mumbai</h3>
          <p className="text-sm mt-2">
            Plot in Thane | Plot in Panvel | Plot in Uran | Plot in Vindhane | Plot in Ranjanpada | Plot in Karjat
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-white text-black text-center py-3 mt-6 text-sm">
        All trademarks, logos, and names are properties of their respective owners. © Copyright 2025 Zaminwale Pvt Limited.
      </div>
    </footer>
  );
};

export default Footer;