import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Correct import for Vite + React

export default function ForBuyerDropdown({ setIsDropdownOpen }) {
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // ✅ Use `useNavigate` instead of Next.js router

  // Function to handle "Land/Plot" click
  const onLandPlotClick = () => {
    console.log("Land/Plot clicked!");
    navigate("/plot-navbar"); // ✅ Navigates to the route
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsDropdownOpen]);

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 mt-12 w-[1100px] h-85 bg-white shadow-lg rounded-md p-4 z-50 border border-gray-200"
      ref={dropdownRef}
    >
      <div className="grid grid-cols-4 w-full gap-5 mt-6 text-gray-700">
        {/* First Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Buy Home</h3>
          <ul className="mt-2 space-y-4 text-sm">
            <li
              className="hover:text-blue-500 text-black transition-all cursor-pointer"
              onClick={onLandPlotClick} // ✅ Navigates when clicked
            >
              Land/Plot
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-all">COMMERCIAL</li>
            <li className="hover:text-blue-500 cursor-pointer transition-all">POPULAR AREAS</li>
            <li className="hover:text-blue-500 cursor-pointer transition-all">INSIGHTS NEW</li>
            <li className="hover:text-blue-500 cursor-pointer transition-all">ARTICLES & NEWS</li>
          </ul>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-500">PROPERTIES IN PUNE</h3>
          <ul className="mt-2 space-y-3 text-sm">
            <li className="hover:text-blue-500 font-bold cursor-pointer transition-all">Flats</li>
            <li className="hover:text-blue-500 font-bold cursor-pointer transition-all">Builder Floors</li>
            <li className="hover:text-blue-500 font-bold cursor-pointer transition-all">Independent House</li>
            <li className="hover:text-blue-500 font-bold cursor-pointer transition-all">Plots in Pune</li>
            <li className="hover:text-blue-500 font-bold cursor-pointer transition-all">Service Apartments</li>
            <li className="hover:text-blue-500 font-bold cursor-pointer transition-all">Studio Apartments</li>
            <li className="hover:text-blue-500 font-bold cursor-pointer transition-all">Farm House</li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-500">POPULAR SEARCHES</h3>
          <ul className="mt-2 space-y-3 text-sm">
            <li className="hover:text-blue-500 font-bold cursor-pointer transition-all">Property in Pune</li>
            <li className="hover:text-blue-500 font-bold cursor-pointer transition-all">
              Verified Property in Pune
            </li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="mt-4 bg-blue-50 p-3 rounded-md">
          <h3 className="text-blue-600 font-bold text-sm">INTRODUCING</h3>
          <h2 className="text-lg font-bold text-gray-800">Insights</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="flex items-center gap-2">✅ Understand localities</li>
            <li className="flex items-center gap-2">✅ Read Resident Reviews</li>
            <li className="flex items-center gap-2">✅ Check Price Trends</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
