import React from "react";

// Property Type Card Component
export const PropertyCard2 = ({ title, propertyCount, imageUrl, altText }) => {
  return (
    <div
      className="bg-white cursor-pointer shadow-md hover:shadow-lg transition duration-300 rounded-lg p-4 w-56 text-center"
    >
      {/* Property Title */}
      <div className="text-lg font-semibold text-gray-800 mb-1">{title}</div>
      {/* Property Count */}
      <p className="text-sm text-gray-600 mb-3">{propertyCount} Properties</p>
      {/* Image */}
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-36 object-cover rounded-lg"
      />
    </div>
  );
};

// Property Slider Component
const PropertySlider = () => {
  // Property Data Array
  const propertyTypes = [
    {
      id: 1,
      title: "Residential Apartment",
      propertyCount: "12,000+",
      imageUrl:
        "https://static.99acres.com/universalhp/img/d_hp_property_type_1.png",
      altText: "Residential Apartment",
    },
    {
      id: 2,
      title: "Residential Land",
      propertyCount: "580+",
      imageUrl:
        "https://static.99acres.com/universalhp/img/d_hp_property_type_3.png",
      altText: "Residential Land",
    },
    {
      id: 3,
      title: "Independent House/ Villa",
      propertyCount: "440+",
      imageUrl:
        "https://static.99acres.com/universalhp/img/d_hp_property_type_2.png",
      altText: "Independent House/ Villa",
    },
    {
      id: 4,
      title: "Independent/ Builder Floor",
      propertyCount: "350+",
      imageUrl:
        "https://static.99acres.com/universalhp/img/d_hp_property_type_4.png",
      altText: "Independent/ Builder Floor",
    },
    {
      id: 5,
      title: "1 RK/ Studio Apartment",
      propertyCount: "50+",
      imageUrl:
        "https://static.99acres.com/universalapp/img/projectnoimage.webp",
      altText: "1 RK/ Studio Apartment",
    },
    {
      id: 6,
      title: "Serviced Apartments",
      propertyCount: "4",
      imageUrl:
        "https://static.99acres.com/universalapp/img/projectnoimage.webp",
      altText: "Serviced Apartments",
    },
    {
      id: 7,
      title: "Farm House",
      propertyCount: "3",
      imageUrl:
        "https://static.99acres.com/universalapp/img/projectnoimage.webp",
      altText: "Farm House",
    },
  ];

  return (
    <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide">
      {propertyTypes.map((property) => (
        <PropertyCard
          key={property.id}
          title={property.title}
          propertyCount={property.propertyCount}
          imageUrl={property.imageUrl}
          altText={property.altText}
        />
      ))}
    </div>
  );
};

export default PropertyCard2;
