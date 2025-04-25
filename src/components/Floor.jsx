import React from "react";
import FloorDetails from "./FloorDetails";

const Floor = () => {
  return (
    <div>
    <div className="w-full border rounded-md shadow-md">
      {/* Navigation Tabs */}
      <div className="flex border-b bg-gray-100">
        {["FLOOR PLAN", "INCLUSIONS", "AREA DETAILS", "PRICE DETAILS"].map(
          (tab, index) => (
            <div
              key={index}
              className="flex-1 text-center py-3 font-semibold border-r last:border-r-0 cursor-pointer hover:bg-gray-200"
            >
              {tab}
            </div>
          )
        )}
      </div>

      {/* Property Information Section */}
      <div className="p-4 grid grid-cols-4 gap-6  items-stretch border text-gray-600">
        {/* Image Section (Column 1) */}
        <div className="pr-1 border-r">
          <img
            src="https://projectcdn.99acres.com/project_data/370f9a/block1_101098/3D/49094_B1_1F31_3D.jpg"
            alt="Floor Plan"
            className="w-full h-auto rounded-md shadow-sm"
          />
        </div>

        {/* Bedrooms Section (Column 2) */}
        <div className="px-4 border-r-1 border-gray-300 mt-15">
  <p className="text-lg font-semibold">3 Bedrooms</p>
</div>

{/* Carpet Area Section (Column 3) */}
<div className="px-4 border-r-1 border-gray-300 mt-15">
  <p className="text-lg">Carpet Area:</p>
  <p className="font-bold text-black text-lg">1332 sq.ft.</p>
  <p className="text-sm text-gray-500">123.75 sq.m.</p>
</div>

{/* Price Details Section (Column 4) */}
<div className="pl-4 mt-15">
  <p className="text-lg">Base Price:</p>
  <p className="text-black font-bold text-xl">₹ 2.18 Crores</p>
</div>

      </div>
      
    </div>
    <FloorDetails/>
    </div>
  );
};

export default Floor;