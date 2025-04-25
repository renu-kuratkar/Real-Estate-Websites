import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex h-16 items-center w-fit relative">
            <span className="text-2xl md:text-3xl font-bold text-black">
              zaminwale.com
            </span>
          </div>
          <p className="text-base mt-2">
            G-Square Business Park, 3<sup>rd</sup> Floor, Office No. 303 & 304,
            Opposite Sanpada Railway Station, Navi Mumbai, Maharashtra 400703
          </p>
          <div className="mt-3">
            <p className="text-base">📞 9555599299 / 9555599099</p>
            <p className="text-base">📧 info@zaminwale.com</p>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <a
              href="https://www.facebook.com/zaminwale2021/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:scale-110 transition-transform"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://x.com/ZaminwalePvtLtd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:scale-110 transition-transform"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://in.linkedin.com/company/zaminwale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:scale-110 transition-transform"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://www.instagram.com/zaminwale_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:scale-110 transition-transform"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@zaminwale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:scale-110 transition-transform"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col">
          <h2 className="font-bold text-lg mb-4">Company</h2>
          <nav className="flex flex-col space-y-3">
            <a href="/about" className="hover:text-blue-600 transition">
              About Us
            </a>
            <a href="/testimonials" className="hover:text-blue-600 transition">
              Testimonials
            </a>
            <a href="/awards" className="hover:text-blue-600 transition">
              Awards & Media
            </a>
            <a
              href="/terms-and-conditions"
              className="hover:text-blue-600 transition"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-blue-600 transition"
            >
              Privacy Policy
            </a>
            <a href="/blogs" className="hover:text-blue-600 transition">
              Blog
            </a>
          </nav>
        </div>

        {/* About Section */}
        <div className="lg:col-span-2 md:col-span-1 col-span-1">
          <h2 className="font-bold text-lg mb-4">About Zaminwale</h2>
          <p className="text-justify text-sm leading-relaxed">
            At ZaminWale, we take pride in being your trusted partner in the
            world of real estate, specializing in land transactions across the
            picturesque locales of Thane, Panvel, Mahamumbai, and Navi Mumbai.
            With an unwavering commitment to excellence, we have established
            ourselves as a beacon of reliability and transparency in the real
            estate industry.
          </p>

          {/* Projects Section */}
          <h2 className="font-bold text-lg mt-6 mb-4">Projects in Mumbai</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <a href="/search/top-location/thane" className="hover:text-blue-600">
              Plot in Thane
            </a>
            <span className="text-gray-400">|</span>
            <a href="/search/top-location/panvel" className="hover:text-blue-600">
              Plot in Panvel
            </a>
            <span className="text-gray-400">|</span>
            <a href="/search/top-location/uran" className="hover:text-blue-600">
              Plot in Uran
            </a>
            <span className="text-gray-400">|</span>
            <a href="/search/top-location/chirle" className="hover:text-blue-600">
              Plot in Chirle
            </a>
            <span className="text-gray-400">|</span>
            <a href="/search/top-location/vindhane" className="hover:text-blue-600">
              Plot in Vindhane
            </a>
            <span className="text-gray-400">|</span>
            <a href="/search/top-location/ranjanpada" className="hover:text-blue-600">
              Plot in Ranjanpada
            </a>
            <span className="text-gray-400">|</span>
            <a href="/search/top-location/Karjat" className="hover:text-blue-600">
              Plot in Karjat
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-4">
        <p className="text-center text-sm text-gray-400">
          All trademarks, logos, and names are properties of their respective
          owners. All Rights Reserved. © 2025 Zaminwale Pvt Limited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
