import React, { useState } from "react";
import { Heart, Phone } from "lucide-react";
import AdvertiserDetails from "./AdvertiserDetails"; // Import the modal component
import { useNavigate } from "react-router-dom";


const PropertyCard = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle modal
  const navigate = useNavigate();
  const viewPropertyDetails = (id) => {
    navigate(`/property/${id}`); // Navigate to PropertyDetails page with id
  };

  return (
    <>
    <div className="p-3">

      <div className="max-w-5xl border-1 border-gray-00 mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row p-4 gap-4">
        {/* Left Side - Image Section */}
        <div className="relative w-full md:w-1/3">
          <img
            src="https://imagecdn.99acres.com/media1/28498/16/569976471M-1739685063253.jpg"
            alt="Property"
            className="rounded-lg w-full h-52 object-cover"
          />
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            <span className="bg-red-900 text-white text-xs font-bold px-2 py-1 rounded">FEATURED</span>
            <span className="bg-blue-600 text-white text-xs font-bold px-1 py-1 rounded">SEEN</span>
          </div>
          {/* Heart Icon */}
          <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer">
            <Heart className="text-gray-600" size={18} />
          </div>
          {/* Image Count */}
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
            10
          </div>
        </div>

        {/* Right Side - Details Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Adani Atelier Greens</h3>
          <p className="text-sm text-gray-500">
            3 BHK Flat in Koregaon Park Annexe, Pune • <span className="text-blue-600 font-medium">RERA</span>
          </p>

          {/* Pricing & Area */}
          <div className="flex flex-wrap gap-8 mt-2">
            <p className="text-xl font-bold">₹2 Cr</p>
            <p className="text-md font-semibold">1,500 sqft <span className="text-gray-500">(139 sqm)</span></p>
            <p className="text-md font-semibold">3 BHK <span className="text-gray-500">(2 Baths)</span></p>
          </div>

          {/* Highlights */}
          <div className="mt-2">
            <span className="text-gray-600 font-medium">Highlights :</span>
            <span className="ml-2 bg-gray-200 text-sm font-medium px-2 py-1 rounded">East Facing</span>
            <span className="ml-2 bg-gray-200 text-sm font-medium px-2 py-1 rounded">Fresh Construction</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-2 truncate">
            Luxurious grand new smart 3 BHK available in Adani Atelier...
          </p>

          {/* Dealer & Contact */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">Dealer • 1mo ago</p>
            <p className="text-blue-600 font-medium">Pride Realty</p>

            <div className="flex gap-2">
              <button 
                className="border border-blue-600 text-blue-600 px-3 py-1 rounded text-sm"
                // onClick={() => setShowForm(true)} // Open modal on click
                onClick={viewPropertyDetails}

              >
                Property Details
              </button>
              
              <button className="bg-red-900 text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                <Phone size={16} /> Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Show Modal when clicked */}
      {showForm && <AdvertiserDetails onClose={() => setShowForm(false)} />}
    </>
  );
};

export default PropertyCard;
