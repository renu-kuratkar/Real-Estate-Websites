import React from "react";

const RegisterProperty = () => {
  return (
    <section className="bg-[#FEF9F1] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between mx-auto">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <p className="text-gray-500 font-semibold uppercase text-sm">Sell or Rent Your Property</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Register to post your <br /> property for
          <span className="bg-green-500 text-white text-lg font-bold px-2 ml-2 rounded">FREE</span>
        </h1>
        <p className="text-gray-600 text-lg">Post your residential / commercial property</p>
        
        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-4">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">10L+</p>
            <p className="text-gray-500">Property Listings</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">45L+</p>
            <p className="text-gray-500">Monthly Searches</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">2L+</p>
            <p className="text-gray-500">Owners advertise monthly</p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 bg-red-900 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-700">
          Post your property for FREE
        </button>

        {/* WhatsApp Info */}
        <p className="text-gray-600 text-sm mt-4 flex items-center">
          Or post via <span className="ml-2 text-green-500 text-lg">&#128222;</span> WhatsApp, send a “hi” to +91 7428197035
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="https://static.99acres.com/universalhp/img/d_hp_ppf_xl2.webp" // Replace with actual image path
          alt="Couple using laptop"
          className="rounded-lg shadow-lg w-full max-w-lg"
        />
      </div>
    </section>
  );
};

export default RegisterProperty;
