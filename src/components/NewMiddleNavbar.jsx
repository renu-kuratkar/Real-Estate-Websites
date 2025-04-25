import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaMicrophone } from "react-icons/fa";
import AllResidential from "./ui/AllResidential";

const NewMiddleNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const tabRefs = useRef({});
  const [activeTab, setActiveTab] = useState("Buy");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="relative">
      {!isScrolled && (
        <div className="absolute md:block hidden left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-lg z-20 shadow-xl shadow-black/80">
          <div className="relative overflow-hidden flex-nowrap flex rounded-t-[16px] pt-[6px] pb-[6px] whitespace-nowrap border-b border-[#ebecf0] items-center justify-center ">
            {[
              "Buy",
              "Residential",
              "Commercial",
              "Villa/Bunglow",
              
            ].map((tab) => (
              <div
                key={tab}
                ref={(el) => (tabRefs.current[tab] = el)}
                className="text-[16px] cursor-pointer leading-[24px] m-0 px-[32px] py-[16px] font-bold text-[#041533] relative"
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
            <div
              className="rounded-t-[16px] h-[3px] bg-[#6f272b] absolute p-0 bottom-0 left-0 block m-0 whitespace-normal transition-[left] duration-300 ease-in-out"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            ></div>
          </div>
          <div className="relative flex items-center p-4 bg-white shadow-md">
            <div className="p-4 border-r border-gray-300">
              <AllResidential />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative flex items-center w-full max-w-3xl">
                <FaSearch className="absolute left-4 text-[#6f272b]" />
                <input
                  type="text"
                  placeholder="Search for properties..."
                  className="px-12 py-2 w-full outline-none border-none"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="tooltip" data-tip="Search Near Me">
                <button className="btn p-3 bg-red-50 rounded-full hover:bg-gray-200 transition">
                  <FaMapMarkerAlt className=" text-red-900" />
                </button>
              </div>
              <div className="tooltip" data-tip="Speak">
                <button className="p-3 bg-red-50 rounded-full hover:bg-gray-200 transition">
                  <FaMicrophone className=" text-red-900" />
                </button>
              </div>
              <button className="px-6 py-2 bg-red-900 text-white rounded-full font-semibold hover:bg-gray-900 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewMiddleNavbar;
