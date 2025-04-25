import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyListing = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate("/residential")

  }
  return (
    <div className="p-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-10" onClick={handleClick}>Residential Apartments,Villas in Pune</h2>

      <div className="flex gap-4 overflow-x-auto">
        {/* Property Listings in One Row */}
        <div className="flex gap-4">
          {/* Property Card 1 */}
          <div className="bg-green-100 p-4 rounded-2xl shadow-md min-w-[330px] h-auto">
            <h3 className="text-lg font-semibold" onClick={handleClick}>Independent House/ Villa</h3>
            <p className="text-gray-500 text-sm" onClick={handleClick}>1,500+ Properties</p>
            <img
              src="https://static.99acres.com/universalhp/img/d_hp_property_type_2.png"
              alt="Villa"
              className="mt-2 rounded-lg h-[250px] w-[270px] object-cover mx-auto"
              onClick={handleClick}
            />
          </div>

          {/* Property Card 2 */}
          <div className="bg-yellow-100 p-4 rounded-2xl shadow-md min-w-[330px] h-auto">
            <h3 className="text-lg font-semibold" onClick={handleClick}>Independent/ Builder Floor</h3>
            <p className="text-gray-500 text-sm" onClick={handleClick}>1,200+ Properties</p>
            <img
              src="https://static.99acres.com/universalhp/img/d_hp_property_type_22.png"
              alt="Builder Floor"
              className="mt-2 rounded-lg h-[250px] w-[270px] object-cover mx-auto" onClick={handleClick}
            />
          </div>

          {/* Property Card 3 */}
          <div className="bg-blue-100 p-4 rounded-2xl shadow-md min-w-[330px] h-auto">
            <h3 className="text-lg font-semibold" onClick={handleClick}>1 RK/ Studio Apartment</h3>
            <p className="text-gray-500 text-sm" onClick={handleClick}>210+ Properties</p>
            <img
              src="https://static.99acres.com/universalhp/img/d_hp_property_type_5.png"
              alt="Studio Apartment"
              className="mt-2 rounded-lg h-[250px] w-[270px] object-cover mx-auto" onClick={handleClick}
            />
          </div>

          {/* Property Card 4 */}
          <div className="bg-red-100 p-4 rounded-2xl shadow-md min-w-[330px] h-auto" onClick={handleClick}>
            <h3 className="text-lg font-semibold">1 BHK Apartment</h3>
            <p className="text-gray-500 text-sm">500+ Properties</p>
            <img
              src="https://static.99acres.com/universalhp/img/d_hp_property_type_90.png"
              alt="1 BHK Apartment"
              className="mt-2 rounded-lg h-[250px] w-[270px] object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
