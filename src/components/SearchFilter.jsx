import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SearchFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Search Bar */}
      <div
        className="flex items-center border border-gray-300 p-2 rounded-lg shadow-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <select className="bg-transparent border-none outline-none text-gray-700">
          <option>Buy</option>
          <option>Rent</option>
        </select>
        <input
          type="text"
          placeholder="Enter Locality / Project / Society / Landmark"
          className="flex-grow px-2 border-none outline-none"
        />
        <FaChevronDown className="text-gray-500" />
      </div>

      {/* Filters Section */}
      {isOpen && (
        <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
          <div className="flex flex-wrap gap-2 items-center">
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg">
              Property Types (8) ⌄
            </button>
            <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
              Budget ⌄
            </button>
            <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
              Bedroom ⌄
            </button>
            <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
              Construction Status ⌄
            </button>
            <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
              Posted By ⌄
            </button>
          </div>

          {/* Property Type Options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
            {[
              "Flat/Apartment",
              "Residential Land",
              "Serviced Apartments",
              "Independent/Builder Floor",
              "1 RK/Studio Apartment",
              "Other",
              "Independent House/Villa",
              "Farm House",
            ].map((type, index) => (
              <label key={index} className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="accent-blue-600" />
                {type}
              </label>
            ))}
          </div>

          <p className="text-sm text-blue-600 mt-3 cursor-pointer">
            Looking for commercial properties? <span className="underline">Click here</span>
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Search</button>
            <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
