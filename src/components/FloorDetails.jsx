import React from "react";
import VimanNagarOverview from "./VimanNagarOverview";

const FloorDetails = () => {
  return (
    <>
    <div className="max-w-8xl mx-auto p-4">
      {/* Project Name */}
      <h2 className="text-xl font-semibold text-red-900">Shubh Nirvana</h2>

      {/* Project Details Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700 mt-2">
        {/* Project Area */}
        <p className="text-lg">
          Project Area: <span className="font-bold">5.5 acres</span> 
          <span className="text-sm text-gray-500"> (22.26K sq.m.)</span>
        </p>

        {/* Floors */}
        <p className="text-lg">
          Floors: <span className="font-bold">14</span>
        </p>

        {/* Towers */}
        <p className="text-lg">
          Towers: <span className="font-bold">7</span>
        </p>
      </div>

      {/* Resale Link */}
      <p className="text-red-600 mt-4 text-lg cursor-pointer hover:underline">
        Shubh Nirvana Resale: <span className="font-bold">9 Properties</span>
      </p>

      {/* Society Reviews Section */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-900">Society Reviews</h3>
        <p className="text-gray-500">Shubh Nirvana Ratings and Reviews</p>
      </div>
    </div>
    <VimanNagarOverview/>
    </>
  );
};

export default FloorDetails;