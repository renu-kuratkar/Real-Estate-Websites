import React, { useState } from "react";
import { FaBars , FaCommentAlt } from "react-icons/fa";
import Sidebar from "../BRsidebar/BRSidebar";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar Function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-red-900 fixed w-full z-10 text-white shadow-md shadow-red-900/50 p-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold cursor-pointer">Zaminwale.com</div>

        {/* Right Section with Toggle Button */}
        <div className="flex items-center gap-4">
          <span className="font-bold text-2xl mx-3 cursor-pointer">For Buyer</span>
          <span className="font-bold text-2xl mx-3 cursor-pointer">For Seller</span>

          <FaCommentAlt
            size={24}
            onClick={toggleSidebar}
            className="cursor-pointer "
          />
          <FaBars
            size={24}
            onClick={toggleSidebar}
            className="cursor-pointer mx-4"
          />
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
