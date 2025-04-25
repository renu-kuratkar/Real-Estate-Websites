import { useState } from "react";


export default function FilterSidebar() {
  const [filters, setFilters] = useState(["Flat/Apartment"]);
  const [hideSeen, setHideSeen] = useState(false);
  const [verified, setVerified] = useState(false);
  const [budget, setBudget] = useState([0, 100]);
  const [showMoreProperty, setShowMoreProperty] = useState(false);
  const [showMoreBedrooms, setShowMoreBedrooms] = useState(false);

  const propertyTypes = ["Flat/Apartment", "Villa", "Independent House", "Studio Apartment", "Penthouse"];
  const bedroomTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];

  const toggleFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  return (
    <div className="ml-7 mt-3 p-4 bg-white shadow-lg rounded-lg w-90">
      {/* Applied Filters */}
      <div className="flex justify-between items-center text-gray-700 text-sm mb-2">
        <span className="font-bold text-xl">Applied Filters</span>
        <button onClick={() => setFilters([])} className="text-blue-500 font-semibold text-xs">
          Clear All
        </button>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map((filter) => (
          <div key={filter} className="flex items-center mt-2 font-semibold bg-red-100 text-black px-3 py-1 rounded-full text-sm">
            {filter}
            <button onClick={() => removeFilter(filter)} className="ml-2 text-gray-600 hover:text-red-500">
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Hide Already Seen Toggle */}
      <div className="flex justify-between items-center mt-6 py-2">
        <span className="text-gray-700 text-md font-semibold mb-5">Hide already seen</span>
        <label className="switch">
          <input type="checkbox" checked={hideSeen} onChange={() => setHideSeen(!hideSeen)} />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Verified Properties Toggle */}
      <div className="flex justify-between items-center border-t  border-gray-200 py-2">
        <div className="flex items-center gap-2 text-md font-semibold mb-6 mt-4 text-gray-700">
          <span>Verified properties</span>
          <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">✔ Verified</span>
        </div>
        <label className="switch">
          <input type="checkbox" checked={verified} onChange={() => setVerified(!verified)} />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Budget Section */}
      <div className="border-t border-gray-200 py-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-sm font-semibold mt-4 mb-6">Budget</span>
          <span className="text-gray-600 cursor-pointer">⌄</span>
        </div>

        {/* Budget Range Slider */}
        <div className="mt-2 mb-6">
          <div className="flex justify-between text-xs font-semibold">
            <span className="bg-gray-200 px-2 mb-4 py-1 rounded">{budget[0]}</span>
            <span className="bg-gray-200 px-2 py-1  mb-4 rounded">{budget[1]}+ Crores</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={budget[0]}
            onChange={(e) => setBudget([parseInt(e.target.value), budget[1]])}
            className="w-full mt-2"
          />
        </div>

        {/* Min & Max Budget Select */}
        <div className="flex justify-between mt-2 mb-7">
          <select className="w-30 border p-2 rounded text-sm">
            <option>Min Budget</option>
          </select>
          <select className="w-30 border p-2 rounded text-sm">
            <option>Max Budget</option>
          </select>
        </div>
      </div>

      {/* Type of Property */}
      <div className="border-t border-gray-200 py-2 mt-2 mb-3">
        <span className="font-bold text-md text-gray-700 mb-10">Type of Property</span>
        <div className="flex flex-col gap-2 mt-2">
          {propertyTypes.slice(0, showMoreProperty ? propertyTypes.length : 5).map((type) => (
            <button
              key={type}
              onClick={() => toggleFilter(type)}
              className={`px-3 py-1 text-sm rounded border ${filters.includes(type) ? "bg-red-900 text-white" : "text-gray-700 border-gray-300"}`}
            >
              {filters.includes(type) ? "✔ " : "+ "} {type}
            </button>
          ))}
        </div>
        {propertyTypes.length > 5 && (
          <button onClick={() => setShowMoreProperty(!showMoreProperty)} className="text-blue-500 text-sm mt-2">
            {showMoreProperty ? "- Show less" : "+ 1 more"}
          </button>
        )}
      </div>

      {/* Number of Bedrooms */}
      <div className="border-t border-gray-200 py-2">
        <span className="font-bold text-md text-gray-700">No. of Bedrooms</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {bedroomTypes.slice(0, showMoreBedrooms ? bedroomTypes.length : 5).map((room) => (
            <button
              key={room}
              onClick={() => toggleFilter(room)}
              className={`px-3 py-1 text-sm rounded border ${filters.includes(room) ? "bg-blue-500 text-white" : "text-gray-700 border-gray-300"}`}
            >
              {filters.includes(room) ? "✔ " : "+ "} {room}
            </button>
          ))}
        </div>
        {bedroomTypes.length > 5 && (
          <button onClick={() => setShowMoreBedrooms(!showMoreBedrooms)} className="text-blue-500 text-sm mt-2">
            {showMoreBedrooms ? "- Show less" : "+ 3 more"}
          </button>
        )}
      </div>
     
    </div>
  );
}
