import React from "react";
import { useLocation } from "react-router-dom";
import FilterSidebar from "./FilterSidebar";
import FilterHeader from "./FilterHeader";
import Residential from "./middlenavbarcomponent/Residential";

export default function Combine() {
  const location = useLocation(); // Get current route

  return (
    <div className="flex relative top-[60px] flex-col md:flex-row gap-4 p-4">
      {/* Left Sidebar - Fixed Width */}
      <div className="w-full md:w-1/4">
        <FilterSidebar />
      </div>

      {/* Right Header Section - Conditional Rendering */}
      <div className="w-full md:flex-1 ml-15">
        {location.pathname === "/residential" ? <Residential /> : <FilterHeader />}
      </div>
    </div>
  );
}
