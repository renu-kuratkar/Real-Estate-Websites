import React from "react";
import { FaHeart, FaCheckCircle } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  if (!property) {
    return null; // Prevent rendering if data is missing
  }

  return (
    <div
      className="relative bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
      style={{
        width: "200px", // Smaller width
        height: "281px", // Smaller height
      }}
    >
      {/* Property Image with Verified Badge */}
      <div className="relative w-full h-32 overflow-hidden">
        <img
          src={property.image}
          alt={property.title || "Property Image"}
          className="w-full h-full object-cover"
        />
        {property.verified && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-[10px] font-bold rounded-full flex items-center gap-1">
            <FaCheckCircle size={10} />
            Verified
          </div>
        )}
        <button className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1">
          <FaHeart size={14} />
        </button>
      </div>

      {/* Property Details Section */}
      <div className="p-3 space-y-2">
        {/* Price and Title */}
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-800 truncate">
            {property.title || "Property Details"}
          </h3>
          <span className="text-blue-600 font-bold text-sm">
            ₹ {property.price || "N/A"}
          </span>
        </div>

        {/* Location and Details */}
        <p className="text-gray-500 text-xs truncate">
          {property.location || "N/A"}, {property.city || "Unknown"}
        </p>
        <p className="text-gray-400 text-[10px]">
          Posted by {property.postedBy || "Unknown"} •{" "}
          {property.timeAgo || "N/A"}
        </p>

        {/* Property Info */}
        <div className="text-gray-700 text-xs flex items-center gap-2">
          <span>{property.beds || 2} Beds</span>
          <span className="border-l pl-2">{property.baths || 2} Baths</span>
          <span className="border-l pl-2">
            {property.sqft || "1,200"} sqft
          </span>
        </div>

        {/* Find Out More Button */}
        <button className="w-full bg-orange-300 text-white text-xs font-medium py-1 rounded-full hover:bg-orange-400 transition">
          FIND OUT MORE
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
