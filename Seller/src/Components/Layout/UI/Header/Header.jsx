import React, { useState } from "react";
import "./header.css";
import "../Sidebar/sidebar.css";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

return (
    <>
        <header className="header flex items-center justify-between fixed top-0 left-0 w-full z-50">
            {/* Left Section: Sidebar Toggle and Logo */}
            <div className="flex items-center gap-2">
                {isMobile && (
                    <button className="menu-btn" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                )}
                <h1 className="text-white text-2xl font-bold">ZAMINWALE</h1>
            </div>

            {/* Middle Section: Search & Filters (PC View Only) */}
            <div
                className={`${
                    isMobile ? "hidden" : "flex"
                } items-center w-full max-w-lg bg-white rounded-md`}
            >
                <select className="px-3 py-2 text-sm text-gray-600">
                    <option>Buy</option>
                    <option>Commercial</option>
                    <option>Residential</option>
                    <option>Villa / bungalow</option>
                </select>
                <input
                    type="text"
                    placeholder="Enter Locality / Project / Society / Landmark"
                    className="search-input focus:outline-none focus:ring-0"
                />
                <button className="px-4">
                    <FaSearch className="text-gray-600" />
                </button>
            </div>

            <div className="flex items-center gap-4">
                <button className="post-property-btn text-black flex items-center gap-1">
                    Post property{" "}
                    <span className="free-badge bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                        FREE
                    </span>
                </button>
                {!isMobile && (
                    <>
                        <FaUserCircle className="text-white text-2xl cursor-pointer" />
                        <button className="menu-btn" onClick={toggleSidebar}>
                            <FaBars />
                        </button>
                    </>
                )}
            </div>
        </header>

        {/* Sidebar Component */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
);
};

export default Header;
