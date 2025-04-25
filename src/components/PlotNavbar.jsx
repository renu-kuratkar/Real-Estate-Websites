import { useState, useEffect } from "react";
import { FaBars, FaUserCircle, FaChevronDown } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
// import SidebarMenu from "../components/SidebarMenu";
import { Link } from "react-router-dom";
import Login from "../components/Login"; // Import the Login component
import Newnavbar from "./Newnavbar";
import RouteNavbar from "../components/RouteNavbar";
import Combine from "./Combine";

export default function PlotNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Buy");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State for Login Modal

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
    <RouteNavbar/>

      {/* Add padding to avoid content jump when navbar becomes fixed */}
      {/* <div className={`${isSticky ? "pt-16" : ""}`} /> */}

      {/* <SidebarMenu
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(false)}
      /> */}
      <Combine />
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex  bg-blur items-center justify-center mt-15 backdrop-blur-sm  z-50">
          <div className=" p-6 rounded-lg shadow-lg relative mb-0 w-150">
            {/* Close Button */}
            <button
              className="absolute top-0  text-white right-0 "
              onClick={() => setShowLogin(false)}
            >
              ✖
            </button>
            <Login /> {/* Login Component */}
          </div>
        </div>
      )}
    </>
  );
}
