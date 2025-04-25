import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import MyLocationIcon from "@mui/icons-material/MyLocation";

export default function MiddleNavbar() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-4/6 min-h-[170px] bg-white shadow-md mx-auto rounded-lg z-50 
      ${isSticky ? "hidden" : "absolute top-110 left-1/2 transform -translate-x-1/2"}`}
    >
      {/* Navigation Bar */}
      <nav className="max-w-[1000px] mx-auto px-3 md:px-5 flex justify-between items-center py-2">
        <ul className="flex space-x-19 text-gray-700 font-bold text-3xl md:text-base mt-3">
          {["Buy", "Residential", "Commercial", "Villa/bungalow", "Project", "Plots/Land"].map(
            (item) => (
              <li
                key={item}
                className={`relative cursor-pointer pb-2 ${
                  activeTab === item
                    ? "text-black font-bold border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="bg-white border-t border-gray-200 rounded-lg mt-5">
        <div className="max-w-[1100px] mx-auto px-3 md:px-5 py-2 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
          {/* Dropdown */}
          <div className="relative">
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
              <option>All Residential</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="flex-1 flex items-center border border-gray-50 rounded-lg px-3 py-2 w-full">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder='Search "3 BHK for sale in Mumbai"'
              className="w-full focus:outline-none text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex space-x-2">
            <button className="p-3 bg-red-50 rounded-full">
              <MyLocationIcon className="text-red-900" />
            </button>
            <button className="p-3 bg-red-50 rounded-full">
              <FaMicrophone className="text-red-900" />
            </button>
          </div>

          {/* Search Button */}
          <button className="px-8 py-3 bg-red-900 text-white rounded-lg text-sm">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
