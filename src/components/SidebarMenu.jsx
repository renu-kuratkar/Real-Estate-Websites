import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

export default function SidebarMenu({ isOpen, toggleSidebar }) {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div
      className={`fixed top-0 right-0 w-[380px] h-screen bg-white shadow-lg z-60 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out flex flex-col`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-gray-500 text-xl" />
          <span className="text-red-900 font-semibold">LOGIN / REGISTER</span>
        </div>
        <button onClick={toggleSidebar}>
          <AiOutlineClose className="text-gray-600 text-2xl" />
        </button>
      </div>

      {/* Post Property Button */}
      <div className="p-4">
        <button className="bg-white border border-gray-300 px-4 py-2 text-sm font-semibold rounded-md flex items-center">
          Post Property <span className="bg-red-900 text-white px-2 text-xs rounded ml-1">FREE</span>
        </button>
      </div>

      {/* Scrollable Middle Section */}
      <div className="flex-1 overflow-y-auto p-4 text-gray-700">
        <h2 className="text-sm font-semibold">Explore our Services</h2>
        <hr className="my-2 text-gray-200" />

        {/* Expandable Sections */}
        {["For Buyers", "For Tenants", "For Owners", "For Dealers / Builders"].map((item) => (
          <div
            key={item}
            className="cursor-pointer flex items-center gap-2 py-2"
            onClick={() => toggleSection(item)}
          >
            {expandedSections[item] ? (
              <ArrowDropDownIcon className="text-gray-500" />
            ) : (
              <ArrowRightIcon className="text-gray-500" />
            )}
            {item}
          </div>
        ))}

        <hr className="my-2 text-gray-200" />
        <h2 className="text-sm font-semibold">Home Loans</h2>

        {/* Insights */}
        <div className="cursor-pointer flex items-center gap-2 py-2">
          <ArrowRightIcon className="text-gray-500" />
          Insights <span className="bg-red-900 text-white px-2 text-xs rounded">NEW</span>
        </div>

        {/* Articles & News */}
        <div className="cursor-pointer flex items-center gap-2 py-2">
          <ArrowRightIcon className="text-gray-500" />
          Articles & News
        </div>
        <hr className="my-2 text-gray-200" />
        <h2 className="text-sm font-semibold">About Us</h2>
        <div className="cursor-pointer flex items-center gap-2 py-2">
          <ArrowRightIcon className="text-gray-500" />
          Get Help
        </div>
        <div className="cursor-pointer flex items-center gap-2 py-2 ml-9 text-black">
          Download App
        </div>
      </div>

      {/* Footer Section with Search Bar */}
      <div className="bg-gray-50 p-4">
        {/* Search by Property Code */}
        <div className="relative mb-2">
          <input
            type="text"
            placeholder="Search by Property Code"
            className="w-full p-2 border rounded-md outline-none"
          />
          <AiOutlineSearch className="absolute right-3 top-3 text-gray-500" />
        </div>

        {/* Footer Info */}
        <div className="text-xs text-gray-600">
          Toll Free Number: <span className="font-semibold">1800 41 99099</span> <br />
          For international numbers <a href="#" className="text-blue-600">click here</a>
        </div>
      </div>
    </div>
  );
}
