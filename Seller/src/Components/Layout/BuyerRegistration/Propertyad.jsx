import React from "react";
import propertyImg from "../../../assets/desk.png"; // Add image path

const PropertyAd = () => {
  return (
    <div className=" bg-gradient-to-b from-white to-white w-full py-12 px-4 md:px-8 lg:px-20 flex flex-col md:flex-row items-center">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Sell or Rent your Property{" "}
          <span className="text-red-900">online faster</span> with{" "}
          <span className="text-blue-900">zaminwala.com</span>
        </h2>
        <ul className="text-gray-700 space-y-3 text-base md:text-lg">
          <li className="flex items-start gap-2">
            ✅ <span>Advertise for <strong>FREE</strong></span>
          </li>
          <li className="flex items-start gap-2">
            ✅ <span>Get unlimited enquiries</span>
          </li>
          <li className="flex items-start gap-2">
            ✅ <span>Get shortlisted buyers and tenants <span className="text-blue-500">*</span></span>
          </li>
          <li className="flex items-start gap-2">
            ✅ <span>Assistance in coordinating site visits <span className="text-blue-500">*</span></span>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-lg">
          <img
            src={propertyImg}
            alt="Post Property"
            className="w-full rounded-lg h-150 "
          />
          
        </div>
      </div>
    </div>
  );
};

export default PropertyAd;
