import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Villa/bungalow",
    price: "₹ 55 L | 2000 sqft",
    location: "Karjat, Navi Mumbai",
    status: "Ready Move",
    image: "https://static.99acres.com/universalhp/img/d_hp_property_type_2.png",
    route:'/villbunglow'
  },
  {
    id: 2,
    title: "Villa/bungalow",
    price: "₹ 2.50 Cr | 5000 sqft",
    location: "Karjat, Navi Mumbai",
    status: "Ready Move",
    image: "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/22faf4bb-3468-4ac0-98e7-05ee4dade3fc.jpeg",
    route:'/villbunglow'
  },
  {
    id: 3,
    title: "Residential",
    price: "₹ 3 L | 1089 sqft",
    location: "Thane, Mumbai",
    status: "Ready Move",
    image: "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/873130b4-feb4-40f7-b284-7221c736c8bf.jpeg",
    route:'/residentialx'
  },
  {
    id: 4,
    title: "Villa/bungalow",
    price: "₹ 99 L | 3000 sqft",
    location: "Karjat, Navi Mumbai",
    status: "Ready Move",
    image: "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/fd1fb1a5-6847-4d67-ae73-9e1fa623c748.jpg",
    route:'/villbunglow'
  },
];

const NewProperty = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();


  const handleStatusClick = (id) => {
    setSelectedProperty(selectedProperty === id ? null : id);
  };

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold">Popular Properties</h2>
        <a href="#" className="text-red-900 text-lg font-semibold hover:underline">
          See More Properties →
        </a>
      </div>

      {/* Properties Container */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md min-w-[300px] md:min-w-[350px] lg:min-w-[400px] overflow-hidden"
            onClick={() => navigate(property.route)}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-xl font-bold">{property.price}</p>
              <p className="text-gray-600">{property.location}</p>
              <p
                className="text-green-700 font-medium cursor-pointer hover:underline"
                onClick={() => handleStatusClick(property.id)}
              >
                {property.status}
              </p>

              {/* View Details Button */}
              {selectedProperty === property.id && (
                <button className="mt-2 w-full bg-red-900 text-white py-2 rounded-lg hover:bg-red-900 transition">
                  View Details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProperty;
