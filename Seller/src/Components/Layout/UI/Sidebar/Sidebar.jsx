import React, { useState } from "react";
import "./sidebar.css";
import {
  FaTimes,
  FaUserCircle,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";

export const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      {/* Sidebar Container */}
      <div
        className={`sidebar fixed top-0 right-0 h-full w-72 bg-white shadow-lg transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="sidebar-header flex items-center justify-between p-4 bg-gray-100">
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-xl text-gray-600" />
            <a href="#" className="text-sm font-semibold">
              Login / Register
            </a>
          </div>
          <button onClick={toggleSidebar} className="text-gray-600 text-xl">
            <FaTimes />
          </button>
        </div>

        {/* Post Property Section */}
        <div className="post-property flex items-center justify-between p-4 border-b">
          <button className="text-black font-semibold">Post Property</button>
          <span className="free-badge bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">FREE</span>
        </div>

        {/* Menu Sections */}
        <div className="menu p-4 space-y-6">
          {/* Explore Services Section */}
          <div className="menu-section">
            <p className="menu-title font-semibold text-gray-700">
              Explore our Services
            </p>
            {["For Buyers", "For Sellers"].map((item) => (
              <div key={item} className="menu-item">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleMenu(item)}
                >
                  <span>{item}</span>
                  {expandedMenus[item] ? <FaAngleDown /> : <FaAngleRight />}
                </button>
                {expandedMenus[item] && (
                  <div className="submenu pl-4 pt-2 space-y-1">
                    <a href="#" className="submenu-item">
                      Option 1
                    </a>
                    <a href="#" className="submenu-item">
                      Option 2
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Static Menu Items */}
          <div className="menu-section">
            <a href="#" className="menu-item">
              Home Loans
            </a>
            <div className="menu-item">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleMenu("Insights")}
              >
                <span>Insights</span>
                <span className="badge-new">NEW</span>
              </button>
            </div>
            <a href="#" className="menu-item">
              Articles & News
            </a>
          </div>

          {/* Footer Links */}
          <div className="menu-footer space-y-2 pt-4 border-t">
            <a href="#" className="menu-item active">
              About Us
            </a>
            <a href="#" className="menu-item">
              Get Help
            </a>
            <a href="#" className="menu-item">
              Download App
            </a>
          </div>
        </div>
      </div>

      {/* Overlay when Sidebar is open */}
      {isSidebarOpen && (
        <div
          className="overlay fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
