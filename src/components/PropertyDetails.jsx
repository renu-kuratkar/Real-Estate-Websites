import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaMicrophone } from "react-icons/fa";
import Floor from "./Floor";
import RouteNavbar from "./RouteNavbar";
import Overview from "./Overview";
import PropertyEnquiry from "./PropertyEnquiry";
import PriceTrend from "./PriceTrend";
import TableComponent from "./TableComponent";
import ReviewSystem from "./ReviewSystem";


const PropertyDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

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
    <>
      <RouteNavbar />
      <div className="max-w-8xl mx-auto p-4 mt-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-2">
          Home &gt; Property in Pune &gt; Flats in Pune &gt; Flats in Viman Nagar &gt; 3 BHK Flats in Viman Nagar
        </nav>

        {/* Main Content */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold">₹2.18<span className="text-lg"> Crore</span></h2>
              <p className="text-gray-500">Base Price: ₹16366 Per Sq.Ft.</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">1332 <span className="text-blue-500">sq.ft.</span></p>
              <p className="text-gray-500">(123.75 sq.m.)</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">Under Construction</p>
              <p className="text-gray-500">Possession: December 2025</p>
            </div>
          </div>

          {/* Action Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">NO BROKERAGE</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded text-sm font-medium">RERA STATUS ✅</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">REGISTERED</span>
            <p className="text-sm text-gray-500">
              Registration No: P52100031263 <a href="#" className="text-blue-600">View QR Code</a>
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-end mt-4">
            <button className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              View Phone Number
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-4">
          <div className="relative overflow-hidden flex-nowrap flex rounded-t-[16px] pt-[6px] pb-[6px] whitespace-nowrap border-b border-[#ebecf0]">
            {["Overview", "Society", "Owner Details", "Price Trends", "Registry Record", "Society Reviews", "Explore Locality", "Featured Dealers", "Recommendations", "Articles"].map((tab) => (
              <div
                key={tab}
                ref={(el) => (tabRefs.current[tab] = el)}
                className={`text-[16px] cursor-pointer leading-[24px] m-0 px-[32px] py-[16px] font-bold relative ${activeTab === tab ? "text-red-900" : "text-[#041533]"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
            <div
              className="rounded-t-[16px] h-[3px] bg-[#6f272b] absolute p-0 bottom-0 left-0 block m-0 whitespace-normal transition-[left] duration-300 ease-in-out"
              style={indicatorStyle}
            ></div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "Overview" && <Overview />}
        {activeTab === "Society" && <ReviewSystem/>}
        {activeTab === "Owner Details" && <div>Owner Details</div>}
        {activeTab === "Price Trends" && <PriceTrend />}
        {activeTab === "Registry Record" && <div>Registry Record</div>}
        {activeTab === "Society Reviews" && <div>Society Reviews</div>}
        {activeTab === "Explore Locality" && <div>Explore Locality</div>}
        {activeTab === "Featured Dealers" && <div>Featured Dealers</div>}
        {activeTab === "Recommendations" && <div>Recommendations</div>}
        {activeTab === "Articles" && <div>Articles</div>}

        {/* Additional Sections */}
        <PropertyEnquiry />
        <TableComponent />
        <ReviewSystem/>
        {/* <Floor /> */}
      </div>
    </>
  );
};

export default PropertyDetails;
