import { useState, useEffect } from "react";
import { FaBars, FaUserCircle, FaChevronDown } from "react-icons/fa";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import SidebarMenu from "./SidebarMenu";
import ForBuyerDropdown from "./ForBuyersDropdown";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isBuyerDropdownOpen, setIsBuyerDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar (Sticky Effect) */}
      <nav
        className={`p-3 flex items-center justify-between bg-[#6f272b] w-full z-50 transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 shadow-md" : "relative"
        }`}
      >
        <div className="flex items-center gap-4">
          <h1 className="text-white text-xl md:text-3xl font-bold ml-4">
            zaminwale.com
          </h1>
          <div className="hidden md:flex items-center gap-1 text-white text-sm cursor-pointer">
            Buy in Pune <FaChevronDown className="mr-8 mt-1 text-xs" />
          </div>
        </div>

        {/* Middle Navbar (Hidden on Small Screens) */}
        <div
          className={`items-center gap-4 w-full max-w-[650px] bg-white shadow-md rounded-md p-1 border border-gray-300 ${
            isSticky ? "flex" : "hidden"
          }`}
        >
          <div className="flex items-center px-3 border-r border-gray-300 text-black font-semibold cursor-pointer">
            Buy <FaChevronDown className="ml-1 mt-1 text-gray-500 text-xs" />
          </div>
          <input
            type="text"
            placeholder="Enter Locality / Project / Society / Landmark"
            className="w-full px-3 py-2 text-gray-600 outline-none"
          />
          <div className="flex items-center gap-2 pr-4 border-r border-gray-300">
            <div className="bg-red-50 p-2 rounded-full cursor-pointer">
              <MyLocationIcon className="text-red-900" />
            </div>
            <div className="bg-red-50 p-2 rounded-full cursor-pointer">
              <MicIcon className="text-red-900" />
            </div>
          </div>
          <button className="p-2 text-gray-500">
            <SearchIcon />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-9">
          <div className={`${isSticky ? "hidden" : "flex"} relative`}>
            {/* For Buyers (Dropdown Toggle) */}
            <div
              className="hidden md:flex items-center gap-2 pl-10 text-white text-xl font-bold cursor-pointer relative"
              onClick={() => setIsBuyerDropdownOpen(!isBuyerDropdownOpen)}
            >
              For Buyers
              <FaChevronDown className="mt-1 text-xs" />
            </div>

            {/* Dropdown Menu */}
            {isBuyerDropdownOpen && <ForBuyerDropdown />}

            {/* Other Navbar Links */}
            <div className="hidden md:flex items-center gap-8 pl-10 text-white text-xl font-bold cursor-pointer">
              For Owners
            </div>
            <div className="hidden md:flex items-center gap-8 pl-10 text-white text-xl font-bold cursor-pointer">
              For Sellers
            </div>
          </div>

          <button className="hidden md:flex bg-white text-sm px-5 py-2 rounded-md items-center shadow-md">
            Post property
            <span className="bg-green-500 text-white px-2 text-xs rounded ml-1">
              FREE
            </span>
          </button>

          <div className="relative hidden md:block">
            <FaUserCircle className="text-white text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-600 w-2 h-2 rounded-full"></span>
          </div>

          <FaChevronDown className="hidden md:block text-white text-xs cursor-pointer" />

          <button
            className="text-white text-2xl"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Add padding to avoid content jump when navbar becomes fixed */}
      <div className={`${isSticky ? "pt-16" : ""}`} />

      {/* Mobile Search Bar */}
      <div className="flex md:hidden p-2 bg-white shadow-md border-b">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 text-gray-600 outline-none border border-gray-300 rounded-md"
        />
        <button className="p-2 text-gray-500">
          <SearchIcon />
        </button>
      </div>

      <SidebarMenu
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(false)}
      />
    </>
  );
}
