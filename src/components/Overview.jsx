import React from "react";
import { FaRupeeSign, FaBuilding, FaMapMarkerAlt, FaHome, FaCalendarAlt } from "react-icons/fa";
import propertyImage from "../assets/property2.jpg"; // Ensure correct path

const Overview = () => {
  return (
    <div className="max-w-fullmx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex md:items-center p-4">
      {/* Left Section - Image */}
      <div className="md:w-1/2 relative">
        <img
          src={propertyImage}
          alt="Property"
          className="w-100 h-75 rounded-lg"
        />
        <div className="absolute bottom-3 left-3 bg-pink-600 text-white text-sm px-3 py-1 rounded-md">
          💬 3 people already contacted since last week
        </div>
      </div>

      {/* Right Section - Details */}
      <div className="md:w-1/2 p-4 space-y-3">
        <div className="flex items-center text-gray-700 text-lg font-semibold">
          <FaBuilding className="mr-2 text-sm" /> Super Built-up area: <span className="text-blue-600 ml-2">535 sq.ft.</span>
        </div>
        <div className="flex items-center text-gray-700 text-lg font-semibold ">
          <FaRupeeSign className="mr-2 text-sm" /> 20 Lac @ 3,738 per sq.ft.
        </div>
        <div className="flex items-center text-gray-700 text-lg font-semibold">
          <FaMapMarkerAlt className="mr-2 text-sm" /> Namrata Ecocity, Talegaon Dabhade, Pune
        </div>
        <div className="flex items-center text-gray-700 text-lg font-semibold">
          <FaHome className="mr-2 text-sm" /> 1 Bedroom, 1 Bathroom, 1 Balcony
          <a href="#" className="text-blue-600 ml-2">View Floor Plan</a>
        </div>
        <div className="flex items-center text-gray-700 text-lg font-semibold">
          <FaCalendarAlt className="mr-2 text-sm " /> Property Age: 5 to 10 Years
          <a href="#" className="text-blue-600 ml-2">View Construction Status</a>
        </div>
      </div>
      
    </div>
  );
};

export default Overview;
