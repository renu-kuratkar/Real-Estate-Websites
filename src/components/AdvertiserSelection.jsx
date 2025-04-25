import React from "react";

const AdvertiserSelection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#FEF8F2] p-6 md:p-10 rounded-lg">
      {/* Left Section */}
      <div className="md:w-1/3 flex flex-col justify-center">
        <img
          src="https://static.99acres.com/universalapp/img/proj_investment_v2.webp"  // Replace with your image path
          alt="Property Icon"
          className="w-14 h-14 mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-900 mt-4">Properties posted by</h2>
        <p className="text-gray-600">Choose type of advertiser</p>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900">Choose type of advertiser</h3>
        <p className="text-gray-600 mb-4">Browse your choice of listing</p>

        <div className="space-y-4">
          {[
            { type: "Dealer", properties: "26,000+ Properties", img: "https://img.icons8.com/?size=100&id=bQvEEH41IxPg&format=png&color=000000" },
            { type: "Owner", properties: "9,900+ Properties", img: "https://img.icons8.com/?size=100&id=Rg4SvmtjZ9hC&format=png&color=000000" },
            { type: "Builder", properties: "310+ Properties", img: "https://img.icons8.com/?size=100&id=PJoBcGEmAQg8&format=png&color=000000" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.type}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{item.type}</h4>
                  <p className="text-gray-500 text-sm">{item.properties}</p>
                </div>
              </div>
              <span className="text-gray-500">&rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertiserSelection;
