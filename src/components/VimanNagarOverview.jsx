import React from 'react';

const VimanNagarOverview = () => {
  return (
    <div className="w-full p-6">
      <h1 className="text-xl font-semibold  mb-8">Viman Nagar, Pune Overview</h1>

      <div className="flex flex-wrap gap-8 justify-between w-full">
        {/* What's Great Here */}
        <div className="flex-1 min-w-[280px] p-6 bg-green-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">What's Great Here!</h3>
          <ul className="list-none space-y-4 text-gray-700">
            <li>
              <span className="font-bold text-black">Affluent Area:</span> Viman Nagar is an affluent residential & commercial locality in Pune.
            </li>
            <li>
              <span className="font-bold text-black">Proximity to Airport:</span> Popularly known for its proximity to Pune International Airport.
            </li>
            <li>
              <span className="font-bold text-black">Availability of 3 BHK Apartments:</span> Offers ample 3 BHK apartments at premium rates.
            </li>
            <li>
              <span className="font-bold text-black">Connectivity:</span> Nagar Road, a key thoroughfare, offers connectivity to Viman Nagar.
            </li>
          </ul>
        </div>

        {/* What Needs Attention */}
        <div className="flex-1 min-w-[280px] p-6 bg-red-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">What Needs Attention!</h3>
          <ul className="list-none space-y-4 text-gray-700">
            <li>
              <span className="font-bold text-black">Accident-prone Routes:</span> A route in Viman Nagar has been identified as accident-prone.
            </li>
            <li>
              <span className="font-bold text-black">Garbage Dumping:</span> Garbage dumping on the connecting roads is a major concern.
            </li>
            <li>
              <span className="font-bold text-black">Waterlogging:</span> Viman Nagar Chowk witnesses waterlogging following heavy rain.
            </li>
            <li>
              <span className="font-bold text-black">Pollution:</span> The area experiences poor AQI & increasing pollution.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VimanNagarOverview;
