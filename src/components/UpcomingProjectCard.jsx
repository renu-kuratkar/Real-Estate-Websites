import React from "react";

const UpcomingProjectCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Card Container */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://newprojects.99acres.com/projects/skyi_developers/skyi_manas_lake/images/kkwoltg_1738842671_567387799_large.jpg" // Replace with actual path
            alt="SKYi Manas Lake"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute top-4 left-4 text-white font-semibold text-lg">
            <h2>SKYi Manas Lake</h2>
            <p className="text-sm">Bhukum, Pune</p>
          </div>
          <div className="absolute top-4 right-4 text-white text-right">
            <p className="text-sm">2, 3 BHK Apartment</p>
            <p className="font-bold text-lg">₹ 44.62 - 77 L</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#0A1931] text-white p-4 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-sm md:text-base">
            Interested in this project by <span className="font-bold">SKYi?</span>
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition-all flex items-center gap-2 px-4 py-2 rounded-md mt-3 md:mt-0">
            📞 View Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjectCard;
