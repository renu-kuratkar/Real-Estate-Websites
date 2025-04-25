import { useState } from "react";
import { ChevronRight, Filter } from "lucide-react";
import PropertyCard from "./PropertyCard";

export default function FilterHeader() {
  const filters = [
    "Owner",
    "Verified",
    "Under construction",
    "Ready To Move",
    "With Photos",
    "With Video",
  ];
  
  return (
    <div className=" p-4 md:p-6 rounded-lg shadow-md">
      {/* Results and Title */}
      <div className="text-lg md:text-xl font-semibold text-gray-900">
        4598 results | Flats in Pune for Sale Above 1.85 Crores
      </div>

      {/* Info Banner */}
      <div className="bg-yellow-50 flex items-center p-3 mt-3 rounded-md border border-yellow-200">
        <span className="text-blue-600 font-semibold">📍 Get to know more about <strong>Pune</strong></span>
        <a href="#" className="text-blue-500 ml-2">View Insights <ChevronRight size={16} className="inline" /></a>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="px-3 py-1 text-sm border rounded-full bg-gray-200 hover:bg-gray-300"
          >
            {filter}
          </button>
        ))}
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Sort By Button */}
      <div className="mt-3 flex justify-end">
        <button className="flex items-center text-gray-700 font-medium">
          <Filter size={18} className="mr-1" /> Sort By
        </button>
      </div>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
    </div>
  );
}
