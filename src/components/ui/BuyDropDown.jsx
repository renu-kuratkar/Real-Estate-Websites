import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaMapMarkerAlt, FaMicrophone, FaSearch } from "react-icons/fa";
import AllResidential from "./AllResidential";
import { Button } from "@mui/material";

const BuyDropDown = () => {

  return (
    <div className="flex justify-between">
      <FlyoutLink href="#" FlyoutContent={NavbarItemContent}>
        Buy in Pune
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit pr-5 pl-10 flex items-center gap-2"
    >
      <a href={href} className="relative text-white flex items-center gap-2">
        {children}
        {/* Down Arrow Icon */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }} // Rotate on hover
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <FaChevronDown className="text-white transition-transform duration-300" />
        </motion.span>
      </a>
      <AnimatePresence>
        {open && FlyoutContent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-2/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-[12rem] top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavbarItemContent = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const tabElement = tabRefs.current[activeTab];
      setIndicatorStyle({
        left: tabElement.offsetLeft + tabElement.offsetWidth / 4,
        width: tabElement.offsetWidth / 2,
      });
    }
  }, [activeTab]);
  return (
    <div className="w-full bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold text-3xl">Explore real estate in...</h3>
        {/* <div className="absolute  left-1/2 transform bg-white bg-opacity-80 rounded-lg  shadow-xl shadow-black/80 "> */}
        {/* top div  */}
        <div className="relative overflow-hidden flex-nowrap flex rounded-t-[16px] pt-[6px] whitespace-nowrap  border-b border-[#ebecf0]">
          {["Buy", "Rent / Lease", "Plots/Land", "PG / Co-living",].map((tab) => (
            <div
              key={tab}
              ref={(el) => (tabRefs.current[tab] = el)}
              className="text-[16px] cursor-pointer leading-[24px] m-0 px-[30px] py-[8px] font-bold text-[#041533] relative"
              onClick={() => setActiveTab(tab)}
            >
              {tab === "New Launch" ? (
                <div className="indicator">
                  <span className="indicator-item status status-primary w-2 h-2 bg-red-500 rounded-full absolute top-1 right-0"></span>
                  {tab}
                </div>
              ) : (
                tab
              )}
            </div>
          ))}


          {/* Smooth Moving Indicator */}
          <div
            className="rounded-t-[16px] h-[3px] bg-[#6f272b] absolute p-0 bottom-0 left-0 block m-0 whitespace-normal transition-[left] duration-300 ease-in-out"
            style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }}
          ></div>
        </div>



        {/* bottom div */}
        <div className="relative flex items-center  bg-white shadow-lg ">
          {/* Left Section - AllResidential Component */}
          <div className="p-4 ">
            {/* <AllResidential /> */}
            <details className="dropdown">
              <summary className="btn m-1 rounded-full" style={{border:'none'}}>
                <p>Residential</p>
                <FaChevronDown className="text-black transition-transform duration-300" />
              </summary>
              <ul className="menu bg-white dropdown-content rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </details>
          </div>

          {/* Center Section - Search Bar (Expands to fill space) */}
          <div className="flex-1 flex justify-center">
            <div className="relative flex items-center w-full max-w-3xl ">
              {/* Search Icon Positioned Inside Input */}
              <FaSearch className="absolute left-4 text-[#6f272b]" />

              {/* Search Input Field */}
              <input
                type="text"
                placeholder="Search for properties..."
                className="px-12 py-2 w-full outline-none border-none "
              />
            </div>
          </div>


          {/* Right Section - Location, Mic, and Search Button */}
          <div className="flex items-center space-x-4">

            <button className="px-6 py-2 bg-[#6f272b] text-white rounded-full font-semibold hover:bg-gray-900 transition">
              Explore
            </button>
          </div>
        </div>
        {/* </div> */}
        <p className="text-gray-600 pt-4 pb-4">Continue browsing where you left off...</p>
        <div className="pb-15">

          <button className="font-medium p-1 px-2 hover:bg-[#F08C94]/60 border border-[#6f272b] rounded-full text-sm">Buy in Pune</button>
        </div>
        <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
          Contact sales
        </button>
      </div>
    </div>
  );
};

export default BuyDropDown;
