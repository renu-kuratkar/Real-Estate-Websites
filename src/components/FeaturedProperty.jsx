import React from "react";

const FeaturedProperty = () => {
  return (
    <div className="bg-white px-6 py-10 md:py-16">
      <div className="max-w-full mx-auto bg-gray-100 rounded-xl shadow-lg p-6 md:p-10">
        
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Featured Properties
        </h2>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Left Section - Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Welcome to 99Villa
            </h3>
            <p className="text-gray-700 font-semibold mt-1">
              *Riverhill - With Nature In the Nature!*
            </p>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Enjoy exclusive bungalow + plot offerings with 20+ amenities for the ultimate living experience. 
              Moreover, connect with nature through farming opportunities. We value sustainable living and 
              the joy of growing your own veggies. That’s why we offer plenty of space for farming. Whether 
              you’re experienced or new to gardening, our plots are perfect for unleashing your green thumb.
            </p>

            {/* Button */}
            <button className="mt-4 px-5 py-2 bg-red-900 text-white font-semibold rounded-md hover:bg-red-800 transition">
              See More Details
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://www.zaminwale.com/assets/banner-img/1bhkhome.jpeg" // Replace with your actual image URL
              alt="Villa Preview"
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
